import { ApolloLink, HttpLink } from '@apollo/client';
import { onError } from '@apollo/link-error';
// import Cookies from 'js-cookie';
import fetch from 'isomorphic-unfetch';
// https://www.apollographql.com/docs/link/
// https://www.apollographql.com/docs/react/v3.0-beta/api/link/introduction/
// tldr; links === middleware
var httpLink = new HttpLink({
    uri: 'http://localhost:3000/graphql',
    credentials: 'include',
    fetch: fetch,
});
var authenticationLink = new ApolloLink(function (operation, forward) {
    // add the s to the headers
    operation.setContext({
        headers: {
            // authorization: `bearer ${Cookies.get('equestsid')}` || null,
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Origin': 'http://127.0.0.1:4000/',
        },
    });
    return forward(operation);
});
var errorLink = onError(function (_a) {
    var graphQLErrors = _a.graphQLErrors, networkError = _a.networkError;
    if (graphQLErrors)
        graphQLErrors.forEach(function (_a) {
            var message = _a.message, locations = _a.locations, path = _a.path;
            return console.log("[GraphQL error]: Message: " + message + ", Location: " + locations + ", Path: " + path);
        });
    if (networkError)
        console.log("[Network error]: " + networkError);
});
export var clientLinks = ApolloLink.from([
    authenticationLink,
    httpLink,
]);
