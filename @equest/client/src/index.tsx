/** @jsx jsx */
import { jsx } from '@emotion/core';

import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from './client';
import '@blueprintjs/core/lib/css/blueprint.css';
import 'normalize.css';
import { Routes } from './routes';
import { UserContext } from './UserContext';

ReactDOM.render(
  <ApolloProvider client={client}>
    <UserContext.Provider value={{}}>
      <Routes />
    </UserContext.Provider>
  </ApolloProvider>,
  document.getElementById('app')
);
