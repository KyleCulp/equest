import { ApolloLink, HttpLink, from, split, execute } from '@apollo/client';

import { onError } from 'apollo-link-error';
import { HttpLink } from 'apollo-link-http';
import jwtDecode from 'jwt-decode';


const client = new ApolloClient({
  cache,
  uri: 'http://localhost:4000/graphql',
  headers: {
    authorization: localStorage.getItem('token') || '',
    'client-name': 'Space Explorer [web]',
    'client-version': '1.0.0',
  },
  ...
});


// https://www.apollographql.com/docs/react/v2.5/advanced/network-layer/#apollo-link
const requestLink = new ApolloLink(
  (operation, forward) =>
    new Observable((observer) => {
      let handle;
      Promise.resolve(operation)
        .then((newOperation) => {
          const accessToken = getAccessToken();
          if (accessToken) {
            newOperation.setContext({
              headers: {
                authorization: `bearer ${accessToken}`,
              },
            });
          }
        })
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer),
          });
        })
        .catch(observer.error.bind(observer));
      return () => {
        if (handle) handle.unsubscribe();
      };
    })
);

export const Client = new ApolloClient({
  link: ApolloLink.from([
    new TokenRefreshLink({
      accessTokenField: 'accessToken',
      isTokenValidOrUndefined: () => {
        const token = getAccessToken();
        if (typeof token === 'string' && !isTokenExpired(token)) {
          return true;
        }
        return false;
      },
      fetchAccessToken: () => {
        return fetch(config.getRefreshTokenRoute(), {
          method: 'POST',
          credentials: 'include',
        });
      },
      handleFetch: (accessToken) => {
        // if(typeof accessToken !== 'string') return false;
        const accessTokenDecrypted = jwtDecode(accessToken);
        if (typeof accessTokenDecrypted !== 'string') return false;
        setAccessToken(accessTokenDecrypted);
      },
      handleResponse: (operation, accessTokenField) => (response: Response) => {
        console.log(`${response}`);
        console.log(operation);
        console.log(accessTokenField);
        if (response && !response.ok) {
          console.log(response);
        }
      },
      handleError: (err) => {
        console.error(err);
      },
    }),
    onError(({ graphQLErrors, networkError }) => {
      if (typeof graphQLErrors !== 'undefined') {
        console.log(graphQLErrors);
      }
      if (typeof networkError !== 'undefined') {
        console.log(networkError);
      }
    }),
    requestLink,
    new HttpLink({
      uri: config.getGraphQLRoute(),
      credentials: 'include',
    }),
  ]),
  cache,
  resolvers: {},
  connectToDevTools: true,
});
