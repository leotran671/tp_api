const express = require('express');
const router = express.Router();
const { getServicesUsers, assignServiceToUser, deleteServiceUser } = require('../controllers/servicesUserController');

router.get('/', getServicesUsers);
router.post('/assign', assignServiceToUser);
router.delete('/delete/:id_service/:id_user', deleteServiceUser);

module.exports = router;
