const express = require('express');
const router = express.Router();
const servicesController = require('../controllers/servicesController');
const auth = require('../middleware/auth');

router.get('/', servicesController.getServices);
router.get('/:id', servicesController.getService);
router.post('/', servicesController.createService);
router.put('/:id', servicesController.updateService);
router.delete('/:id', servicesController.deleteService);

module.exports = router;
