export default (req, res) => {
  const { method } = req;
  if (req.body.input) {
    const { imageUrl, width, height } = req.body.input;
  }

  switch (method) {
    case 'GET':
      res.status(200).send('Yay its working!, Get method from image-resize!');
      break;
    case 'POST':
      res.status(200).json({ imageUrl: 'myimageURL' });
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
