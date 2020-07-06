import { withData } from 'next-apollo';
import { HttpLink } from 'apollo-link-http';

const config = {
  link: new HttpLink({
    uri: 'http://go-finance-me.herokuapp.com/v1/graphql', // <- Configure GraphQL Server URL
  }),
};

export default withData(config);
