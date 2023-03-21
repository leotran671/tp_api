const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController');
const auth = require('../middleware/auth');

router.get('/', auth, usersController.getUsers);
router.get('/:id', auth, usersController.getUser);
router.post('/', auth, usersController.createUser);
router.put('/:id', auth, usersController.updateUser);
router.delete('/:id', auth, usersController.deleteUser);

module.exports = router;
