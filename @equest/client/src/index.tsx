import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import App from './app';
// import { Client } from 'gql';

ReactDOM.render(
  // <ApolloProvider client={Client}>
  <App />,
  // </ApolloProvider>,
  document.getElementById('app')
);
