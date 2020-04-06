import { ApolloLink, HttpLink } from '@apollo/client';
import { RetryLink } from '@apollo/link-retry';

// https://www.apollographql.com/docs/link/
// https://www.apollographql.com/docs/react/v3.0-beta/api/link/introduction/

// tldr; links === middleware

const httpLink = new HttpLink({ uri: '/graphql', credentials: 'include' });

const authenticationLink = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext({
    headers: {
      authorization: `bearer ${localStorage.getItem('token')}` || null
    }
  });

  return forward(operation);
});

export const clientLinks = ApolloLink.from([authenticationLink, httpLink]);
