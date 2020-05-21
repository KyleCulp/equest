import { Resolvers } from '@apollo/client';

import { authResolvers } from './authResolver';

// export const clientTypeDefs: DocumentNode[] = [authTypeDefs];

export const clientResolvers: Resolvers = { ...authResolvers };
