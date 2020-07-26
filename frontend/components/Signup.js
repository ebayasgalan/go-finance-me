import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import { useMutation } from '@apollo/react-hooks';
// import Error from "./ErrorMessage";
// import { CURRENT_USER_QUERY } from "./User";

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    signup(email: $email, name: $name, password: $password) {
      id
      email
      name
    }
  }
`;

const signup = () => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [signup, { data }] = useMutation(SIGNUP_MUTATION);

  return (
    <Mutation
      mutation={SIGNUP_MUTATION}
      variables={{ name, email, password }}
      // refetchQueries={[{ query: CURRENT_USER_QUERY }]}
    >
      {(signup, { error, loading }) => {
        return (
          <Form
            method='post'
            onSubmit={async (e) => {
              e.preventDefault();
              await signup({ variables: { name, email, password } });
              setname('');
              setemail('');
              setpassword('');
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
              <h2>Sign up for an account</h2>
              {/* <Error error={error} /> */}
              <label htmlFor='name'>
                name
                <input
                  type='text'
                  name='name'
                  placeholder='name'
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                />
              </label>
              <label htmlFor='email'>
                email
                <input
                  type='email'
                  name='email'
                  placeholder='email'
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
              </label>
              <label htmlFor='password'>
                password
                <input
                  type='password'
                  name='password'
                  placeholder='password'
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
              </label>
              <button type='submit'>Sign Up</button>
            </fieldset>
          </Form>
        );
      }}
    </Mutation>
  );
};

export default signup;
