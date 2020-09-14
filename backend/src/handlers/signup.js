const fetch = require('node-fetch');

const HASURA_OPERATION = `
mutation($email: String!, $age: Int!, $name: String!) {
  insert_user_one(object: {age: $age, name: $name, email: $email}) {
    id
    name
  }
}
`;

// execute the parent operation in Hasura
const execute = async (variables) => {
  const fetchResponse = await fetch(
    'http://go-finance-me.herokuapp.com/v1/graphql',
    {
      method: 'POST',
      body: JSON.stringify({
        query: HASURA_OPERATION,
        variables,
      }),
    }
  );
  const data = await fetchResponse.json();
  console.log('DEBUG: ', data);
  return data;
};

// Request Handler
app.post('/signup', async (req, res) => {
  // get request input
  const { name, email, password } = req.body.input;

  // run some business logic

  // execute the Hasura operation
  const { data, errors } = await execute({ name, email, password });

  // if Hasura operation errors, then throw error
  if (errors) {
    return res.status(400).json(errors[0]);
  }

  // success
  return res.json({
    ...data.insert_user_one,
  });
});
