import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

import { clientResolvers, clientTypeDefs } from '../resolvers';
import { clientCache } from './cache';
import { clientLinks } from './links';

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache: clientCache,
  link: clientLinks,
  resolvers: clientResolvers,
  typeDefs: clientTypeDefs
});
