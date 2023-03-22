const express = require('express');
const router = express.Router();
const { getServicesUsers, assignServiceToUser } = require('../controllers/servicesUserController');

router.get('/', getServicesUsers);
router.post('/assign', assignServiceToUser);

module.exports = router;
