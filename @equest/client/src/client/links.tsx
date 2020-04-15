import { ApolloLink, HttpLink } from '@apollo/client';
import { RetryLink } from '@apollo/link-retry';
import Cookies from 'js-cookie';
import { onError } from 'apollo-link-error';

// https://www.apollographql.com/docs/link/
// https://www.apollographql.com/docs/react/v3.0-beta/api/link/introduction/

// tldr; links === middleware

const httpLink = new HttpLink({
  uri: 'http://localhost:3000/postgraphile',
  // credentials: 'include',
  // fetchOptions: {
  //   mode: 'no-cors'
  // },
  useGETForQueries: true
});

const authenticationLink = new ApolloLink((operation, forward) => {
  // add the s to the headers
  operation.setContext({
    headers: {
      // authorization: `bearer ${Cookies.get('equestsid')}` || null,
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': true
    }
  });

  return forward(operation);
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

export const clientLinks = ApolloLink.from([
  authenticationLink,
  httpLink
]).setOnError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});
