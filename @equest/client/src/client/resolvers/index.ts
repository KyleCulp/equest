import { Resolvers, DocumentNode } from '@apollo/client';
import { authResolvers, authTypeDefs } from './authResolver';

export const clientTypeDefs: DocumentNode = { ...authTypeDefs };

export const clientResolvers: Resolvers = { ...authResolvers };
