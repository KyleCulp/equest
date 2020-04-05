import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
import '@equest/config';

// import { composedMiddleware } from './middleware';
const cache = new InMemoryCache({});

// export const Client = new ApolloClient({
//   link: composedMiddleware,
//   cache,
//   resolvers: {},
//   connectToDevTools: true
// });
