export default (req, res) => {
  const { method } = req;
  // const { name, email, password } = req.body.input;

  switch (method) {
    case 'GET':
      // Get data from your database
      res.status(200).send('Yay its working!, Get method!');
      break;
    case 'POST':
      // Get data from your database
      res.status(200).json({ name });
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
