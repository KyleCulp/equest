import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import App from './app';
import { client } from '@equest/graphql';

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />,
  </ApolloProvider>,
  document.getElementById('app')
);
