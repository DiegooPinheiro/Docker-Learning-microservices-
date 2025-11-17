const { v4: uuidv4 } = require('uuid');

const products = [];

exports.createProduct = (req, res) => {
  const { name, price } = req.body;
  if(!name || price == null) return res.status(400).json({ error: 'name and price required' });
  const product = { id: uuidv4(), name, price, createdAt: new Date().toISOString() };
  products.push(product);
  res.status(201).json(product);
};

exports.listProducts = (req, res) => {
  res.json(products);
};

exports.getProduct = (req, res) => {
  const p = products.find(x => x.id === req.params.id);
  if(!p) return res.status(404).json({ error: 'Product not found' });
  res.json(p);
};

exports.deleteProduct = (req, res) => {
  const idx = products.findIndex(p => p.id === req.params.id);
  if(idx === -1) return res.status(404).json({ error: 'Product not found' });
  products.splice(idx, 1);
  res.status(204).send();
};
