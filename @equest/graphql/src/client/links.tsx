import { ApolloLink, HttpLink } from '@apollo/client';
import { RetryLink } from '@apollo/link-retry';
import Cookies from 'js-cookie';

// https://www.apollographql.com/docs/link/
// https://www.apollographql.com/docs/react/v3.0-beta/api/link/introduction/

// tldr; links === middleware

const httpLink = new HttpLink({
  uri: 'localhost:3000/graphql',
  credentials: 'include'
});

const authenticationLink = new ApolloLink((operation, forward) => {
  // add the s to the headers
  operation.setContext({
    headers: {
      authorization: `bearer ${Cookies.get('equestsid')}` || null
    }
  });

  return forward(operation);
});

export const clientLinks = ApolloLink.from([authenticationLink, httpLink]);
