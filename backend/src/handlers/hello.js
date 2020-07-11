const handler = async (req, res) => {
  // get request input
  const {} = req.body.input;

  // success
  return res.json({
    greeting: 'askfdjsai',
  });
};

module.exports = handler;
