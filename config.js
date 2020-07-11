import { withApollo } from 'next-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';

const config = new ApolloClient({
  uri: 'http://go-finance-me.herokuapp.com/v1/graphql',
  cache: new InMemoryCache(),
});

export default withApollo(config);
