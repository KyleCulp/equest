import { ApolloProvider } from '@apollo/client';
import { client } from '@equest/client';
import { ThemeProvider } from 'emotion-theming';
import App from 'next/app';
import React from 'react';

import theme from '../theme';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}

// Wraps all components in the tree with the data provider
export default MyApp;
