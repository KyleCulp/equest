import { isEmail } from '@equest/utils';
import { gql, makeExtendSchemaPlugin } from 'graphile-utils';
import { Client, Pool } from 'pg';
import { AuthenticationService } from '../services/authentication.service';

// This file is tab city oml

const authenticationService = new AuthenticationService();

export const authenticationResolver = makeExtendSchemaPlugin((build) => ({
  typeDefs: gql`
    input RegisterInput {
      username: String
      email: String!
      password: String!
    }

    type RegisterPayload {
      user: UserAccount! @pgField
    }

    input LoginInput {
      username: String!
      password: String!
    }

    type LoginPayload {
      user: UserAccount! @pgField
    }

    extend type Mutation {
      register(input: RegisterInput!): RegisterPayload
      login(input: LoginInput!): LoginPayload
    }
  `,
  resolvers: {
    Mutation: {
      async register(mutation, args, context, resolveInfo) {
        return authenticationService.register({ build, mutation, args, context, resolveInfo });
      },
      async login(mutation, args, context, resolveInfo) {
        return authenticationService.login({ build, mutation, args, context, resolveInfo });
      },
      async resetPassword(mutation, args, context, resolveInfo) {
        return authenticationService.resetPassword({ build, mutation, args, context, resolveInfo });
      },
    },
  },
}));
