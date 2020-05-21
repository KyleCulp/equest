import { ApolloClient } from '@apollo/client';

import { clientCache } from './cache';
import { clientLinks } from './links';
import { clientResolvers } from './resolvers';
import { authTypeDefs } from './resolvers/authResolver';

export const client = new ApolloClient({
  cache: clientCache,
  link: clientLinks,
  typeDefs: authTypeDefs,
});

client.addResolvers(clientResolvers);
