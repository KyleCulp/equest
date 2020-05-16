import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'emotion-theming';
import { AppProps } from 'next/app';
import React from 'react';

import { client } from '@equest/client';
import theme from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

// Wraps all components in the tree with the data provider
export default MyApp;
