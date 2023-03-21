const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const auth = require('../middleware/auth');

router.post('/create', adminController.createAdmin);
router.post('/login', adminController.login);

module.exports = router;
