const express = require('express');
const router = express.Router();
const servicesController = require('../controllers/servicesController');
const auth = require('../middleware/auth');

router.get('/', auth, servicesController.getServices);
router.get('/:id', auth, servicesController.getService);
router.post('/', auth, servicesController.createService);
router.put('/:id', auth, servicesController.updateService);
router.delete('/:id', auth, servicesController.deleteService);

module.exports = router;
