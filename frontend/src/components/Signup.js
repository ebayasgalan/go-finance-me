import { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import styles from './styles/form.module.scss';

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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signup, { loading, error, data }] = useMutation(SIGNUP_MUTATION);

  return (
    <div className={styles.form}>
      <form
        method='post'
        onSubmit={async (e) => {
          e.preventDefault();
          console.log(name, email, password);
          // await signup({ variables: { name, email, password } });
          setName('');
          setEmail('');
          setPassword('');
        }}
      >
        <fieldset disabled={loading} aria-busy={loading}>
          <h2>Sign up for an account</h2>
          <label htmlFor='name'>
            name
            <input
              type='text'
              name='name'
              placeholder='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label htmlFor='email'>
            email
            <input
              type='email'
              name='email'
              placeholder='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor='password'>
            password
            <input
              type='password'
              name='password'
              placeholder='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type='submit'>Sign Up</button>
        </fieldset>
      </form>
    </div>
  );
};

export default signup;
