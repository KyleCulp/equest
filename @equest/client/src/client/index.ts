import { ApolloClient } from '@apollo/client';

import { clientResolvers, clientTypeDefs } from './resolvers';
import { clientCache } from './cache';
import { clientLinks } from './links';

export const client = new ApolloClient({
  cache: clientCache,
  link: clientLinks,
  typeDefs: clientTypeDefs,
});

client.addResolvers(clientResolvers);
