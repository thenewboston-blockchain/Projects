import '../styles/globals.css';

import { ApolloProvider } from '@apollo/client';

import { useApollo } from '../lib/apolloClient';

const MyApp = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default MyApp;
