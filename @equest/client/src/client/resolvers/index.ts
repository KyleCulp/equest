import { Resolvers, DocumentNode, gql } from '@apollo/client';
import { authResolvers, authTypeDefs } from './authResolver';
import { clientCache } from '../cache';
import { client } from '..';

export const clientTypeDefs: DocumentNode = { ...authTypeDefs };

// Combine resolvers
export const clientResolvers: Resolvers = { ...authResolvers };

// function writeInitialData() {
//   clientCache.writeQuery({
//     query: gql`
//       query {
//         visibilityFilter
//         networkStatus {
//           isConnected
//         }
//       }
//     `,
//     data: {
//       todos: [],
//       visibilityFilter: 'SHOW_ALL',
//       networkStatus: {
//         __typename: 'NetworkStatus',
//         isConnected: false,
//       },
//     },
//   });
// }

// writeInitialData();

// client.onResetStore(writeInitialData);
