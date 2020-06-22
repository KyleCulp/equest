import { ApolloProvider, from } from '@apollo/client';
import { ThemeProvider } from 'emotion-theming';
import { AppProps } from 'next/app';
import React from 'react';
// import { client } from '@equest/client/src/main';
import theme from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="page">
      <Component {...pageProps} />

      <style jsx>{`
        .page {
          font-family: 'Montserrat',Arial, sans-serif;
          font-weight: 300;
          font-size: 16px;
          line-height: 1.7;
          color: grey;
          // background: #111;
          background: linear-gradient(90deg, rgba(11,11,11,1) 0%, rgba(14,14,14,1) 100%);
        }
    `}</style>
    </div>
    // <ThemeProvider theme={theme}>
    // </ThemeProvider>
    // <ApolloProvider client={client}>
      
    // </ApolloProvider>
  );
}

// Wraps all components in the tree with the data provider
export default MyApp;
