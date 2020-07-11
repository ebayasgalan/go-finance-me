import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import withData from '../config';

const userQuery = gql`
  query {
    user {
      id
      name
      email
    }
  }
`;

const Index = () => {
  return (
    <Query query={userQuery} fetchPolicy={'cache-and-network'}>
      {({ loading, data, error }) => {
        if (error) {
          return <div>Error..</div>;
        }
        if (loading) {
          return <div>Loading..</div>;
        }
        return (
          <div>
            {data.user.map((user) => (
              <h1 key={user.id}>{user.name}</h1>
            ))}
          </div>
        );
      }}
    </Query>
  );
};

export default withData({ ssr: true })(Index);
