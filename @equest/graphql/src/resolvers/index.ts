import gql from 'graphql-tag';
import { ApolloCache, Resolvers } from '@apollo/client';
import { authResolvers, authTypeDefs } from './authResolver';

// Combine typedefs
export const clientTypeDefs = [authTypeDefs];

type ResolverFn = (
  parent: any,
  args: any,
  { cache }: { cache: ApolloCache<any> }
) => any;

interface ResolverMap {
  [field: string]: ResolverFn;
}

export interface AppResolvers extends Resolvers {
  Launch: ResolverMap;
  Mutation: ResolverMap;
}

// Combine resolvers
export const clientResolvers = {
  ...authResolvers
};
