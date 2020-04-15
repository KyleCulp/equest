import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from './client';
import '@blueprintjs/core/lib/css/blueprint.css';
import 'normalize.css';
import { Routes } from './routes';

ReactDOM.render(
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>,
  document.getElementById('app')
);
