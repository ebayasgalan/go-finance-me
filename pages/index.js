import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import withData from '../config';

const userQuery = gql`
  query {
    user(limit: 5) {
      id
      name
      age
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
              <p>{user.name}</p>
            ))}
          </div>
        );
      }}
    </Query>
  );
};

export default withData(Index);
