const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());

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

app.listen(PORT);
