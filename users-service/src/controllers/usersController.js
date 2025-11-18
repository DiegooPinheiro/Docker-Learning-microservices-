const { v4: uuidv4 } = require('uuid');

let users = [];

//POST /users
exports.createUser = (req, res) => {
  const { name, email } = req.body;
  if (!name || !email)  return res.status(400).json({ error: 'Name and email are required' });
  const user = { id: uuidv4(), name, email, createdAt: new Date().toISOString() };
    users.push(user);
    res.status(201).json(user);
};

//GET /users
exports.listUsers = (req, res) => {
  res.json(users);
};

//GET /users/:id
exports.getUser = (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
};

//PUT /users/:id
exports.updateUser = (req, res) => {
  const { name, email } = req.body;
  const user = users.find(u => u.id === req.params.id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  if (name) user.name = name;
  if (email) user.email = email;
  user.updatedAt = new Date().toISOString();
  res.json(user);
};

//DELETE /users/:id
exports.deleteUser = (req, res) => {
  const index = users.findIndex(u => u.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'User not found' });
  users.splice(index, 1);
  res.status(204).send();
};