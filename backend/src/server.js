const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 4000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('This is from express');
});

app.post('/:route', (req, res) => {
  try {
    const handler = require(`./handlers/${req.params.route}`);
    return handler(req, res);
  } catch (e) {
    console.log(e);
    return res.status(404).json({
      message: 'not found',
    });
  }
});

app.listen(port, () => console.log('app is listening on port: ' + port));
