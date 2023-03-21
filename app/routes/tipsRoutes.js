const express = require('express');
const router = express.Router();
const tipsController = require('../controllers/tipsController');
const auth = require('../middleware/auth');

router.get('/', tipsController.getTips);
router.get('/:id', tipsController.getTip);
router.post('/', tipsController.createTip);
router.put('/:id', tipsController.updateTip);
router.delete('/:id', tipsController.deleteTip);
router.post("/create-table", tipsController.createTable);

module.exports = router;    
