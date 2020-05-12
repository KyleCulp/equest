import { ApolloClient } from '@apollo/client';

import { clientCache } from './cache';
import { clientLinks } from './links';
import { clientResolvers, clientTypeDefs } from './resolvers';

export const client = new ApolloClient({
  cache: clientCache,
  link: clientLinks,
  typeDefs: clientTypeDefs,
});

client.addResolvers(clientResolvers);
