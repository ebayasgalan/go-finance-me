const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) =>
  res.status(200).send('express server is working at home page')
);

app.post('/signup', async (req, res) => {
  // get request input
  // const { name, email, password } = req.body.input;

  // run some business logic

  // success
  // return res.json({
  //   id: 4,
  //   name: name,
  // });
  res.send('From signup route, method: Post');
});

app.listen(4000, () => console.log(`🚀 Server ready at http://localhost:4000`));
