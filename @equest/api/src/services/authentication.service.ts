import { Injectable } from '@nestjs/common';
import { Build } from 'postgraphile';
import { Client, Pool } from 'pg';
import { GraphQLResolveInfo } from 'graphql';
import { GraphileHelpers } from 'graphile-utils/node8plus/fieldHelpers';
import { isEmail } from '@equest/utils';
// We infer pgMasterAdminPool from graphql context
import { pgMasterAdminPool as pgAdminPool } from '../lib/postgres';
import jwt from 'jsonwebtoken';
import constants from '../constants';

interface ResolverParams {
  build: Build;
  mutation: any;
  args: { [argName: string]: any };
  context: any;
  resolveInfo: GraphQLResolveInfo & {
    graphile: GraphileHelpers<any>;
  };
}

@Injectable()
export class AuthenticationService {
  async validateUser(username: string, password: string) {
    let loginSQL: string;
    if (isEmail(username)) {
      loginSQL = `select user_account.* from app_private.authenticate_by_email($1, $2) user_account where not (user_account is null)`;
    } else {
      loginSQL = `select user_account.* from app_private.authenticate_by_username($1, $2) user_account where not (user_account is null)`;
    }

    const {
      rows: [user],
    } = await pgAdminPool.query(loginSQL, [username, password]);
    return user;
  }

  async register({ build, mutation, args, context, resolveInfo }: ResolverParams) {
    const { username = null, password, email } = args.input;
    const { selectGraphQLResultFromTable } = resolveInfo.graphile;
    const pgMasterAdminPool: Pool = context.pgMasterAdminPool;
    const pgClient: Client = context.pgClient;
    const { login } = context;

    try {
      // Call our register function from the database
      const {
        rows: [user],
      } = await pgMasterAdminPool.query(
        `select user_account.* from app_public.register_user (
              username => $1,
              email => $2,
              password => $3
            ) user_account where not (user_account is null)`,
        [username, email, password]
      );

      if (!user) throw new Error('Registration failed.');

      const sql = build.pgSql;

      const results = await Promise.all([
        // Fetch the data that was requested from GraphQL, and return it
        selectGraphQLResultFromTable(sql.fragment`app_public.user_account`, (tableAlias, sqlBuilder) => {
          sqlBuilder.where(sql.fragment`${tableAlias}.user_id = ${sql.value(user.user_id)}`);
        }),

        // Tell Passport.js we're logged in
        login(user),

        // Tell pg we're logged in
        pgClient.query('select set_config($1, $2, true);', ['jwt.claims.user_id', user.user_id]),
      ]);

      const [row] = results[0];
      return {
        data: row,
      };
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  async login({ build, mutation, args, context, resolveInfo }: ResolverParams) {
    const { username, password } = args.input;
    const pgMasterAdminPool: Pool = context.pgMasterAdminPool;
    const pgClient: Client = context.pgClient;
    const { login } = context;
    const { selectGraphQLResultFromTable } = resolveInfo.graphile;

    // Call pgSQL functions with select statement
    let loginSQL: string;
    if (isEmail(username)) {
      loginSQL = `select user_account.* from app_private.authenticate_by_email($1, $2) user_account where not (user_account is null)`;
    } else {
      loginSQL = `select user_account.* from app_private.authenticate_by_username($1, $2) user_account where not (user_account is null)`;
    }

    try {
      // Call our login function to find out if the username/password combination exists
      const {
        rows: [user],
      } = await pgMasterAdminPool.query(loginSQL, [username, password]);

      if (!user) {
        console.log(user);
        const e = new Error("Login failed");
        // e["code"] = "FFFFF";
        throw e;
      }
      const sql = build.pgSql;
      const results = await Promise.all([
        // Results that the user requested in GraphQL
        selectGraphQLResultFromTable(sql.fragment`app_public.user_account`, (tableAlias, sqlBuilder) => {
          sqlBuilder.where(sql.fragment`${tableAlias}.user_id = ${sql.value(user.user_id)}`);
        }),
        // Tell Passport.js we're logged in
        await login(user),

        // Tell pg we're logged in
        pgClient.query('select set_config($1, $2, true); ', ['jwt.claims.user_id', user.user_id]),
      ]);

      const [row] = results[0];

      return {
        data: row,
      };
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  async resetPassword({ build, mutation, args, context, resolveInfo }: ResolverParams) {
    return { data: 'Password reset' };
  }

  async validateBearerToken(token: string) {
    jwt.verify(token, constants.BEARER_PRIVATE_KEY, function(err, decoded) {
      if(err) console.log(err);

      console.log(decoded);
    });
    
  }

  async generateBearerToken(user_id: string, cb: Function) {
    const { BEARER_PRIVATE_KEY } = process.env;
    jwt.sign({ user_id: user_id }, BEARER_PRIVATE_KEY!, {}, cb(err, token))
  }
}
