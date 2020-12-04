export default (req, res) => {
  console.log('ABC');
  console.log({ req, res });
  res.statusCode = 200;
  res.json({ name: 'John Doe' });
};
