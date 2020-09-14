import { useQuery, gql } from '@apollo/client';

const FIRST_TRY_QUERY = gql`
  query {
    user {
      id
      name
    }
  }
`;

const Index = () => {
  // const { loading, error, data } = useQuery(FIRST_TRY_QUERY);
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;
  // return data.user.map((user, i) => (
  //   <div key={i}>
  //     <p>{user.id}</p>
  //     <p>{user.name}</p>
  //   </div>
  // ));
  return <p>Hi</p>;
};

export default Index;
