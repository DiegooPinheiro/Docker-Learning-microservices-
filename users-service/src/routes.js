const express = require('express');
const router = express.Router();
const controller = require('./controllers/usersController');

router.post('/', controller.createUser);
router.get('/', controller.listUsers);
router.get('/:id', controller.getUser);
router.delete('/:id', controller.deleteUser);

module.exports = router;