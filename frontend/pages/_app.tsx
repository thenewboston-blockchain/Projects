import '../scss/globals.scss';

// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   uri: process.env.endpoint
// });

// const MyApp = ({ Component, pageProps }) => {
//   return (
//     <ApolloProvider client={client}>
//       <Component {...pageProps} />
//     </ApolloProvider>
//   );
// };

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
