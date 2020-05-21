import { Resolvers } from '@apollo/client';
import gql from 'graphql-tag';

export const authTypeDefs = gql`
  type Local {
    isLoggedIn: Boolean!
  }

  extend type Query {
    kylesName: String!
  }
`;

export const authResolvers: Resolvers = {
  Local: {
    isLoggedIn: async function (): // rootValue,
    // args,
    // context,
    // info
    Promise<boolean> {
      return false;
    },
  },
  Query: {
    kylesName: async function (): // rootValue,
    // args,
    // context,
    // info
    Promise<string> {
      console.log('hello');
      return 'its kyle xd';
    },
  },
};
