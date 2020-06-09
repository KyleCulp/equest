import { Application, Request, Response } from 'express';
import passport from 'passport';
import { Pool } from 'pg';
import { pgMasterAdminPool } from '../lib/postgres';

async function getUserByIdentifier(pgMasterAdminPool: Pool, identifier: string) {
  const {
    rows: [user],
  } = await pgMasterAdminPool.query(
    `
    select user_account.* from app_public.user_account
      where user_account.user_id = $1
		`,
    [identifier]
  );

  if (!user) return false; // This MUST be 'false', not 'null', due to how Passport works

  return user;
}

passport.serializeUser<any, any>((user, done) => {
  done(null, user['user_id']);
});

passport.deserializeUser((identifier: string, done) => {
  getUserByIdentifier(pgMasterAdminPool, identifier).then(
    (user) => done(null, user),
    (e) => done(e)
  );
});

export const passportInitializeMiddleware = passport.initialize();

export const passportSessionMiddleware = passport.session();

export const getUserClaimsFromRequest = async (req: Request) => ({
  ...(req['user'] ? { ['user_id']: req['user']['user_id'] } : null),
});
