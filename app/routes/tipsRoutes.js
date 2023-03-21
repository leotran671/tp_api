const express = require('express');
const router = express.Router();
const tipsController = require('../controllers/tipsController');
const auth = require('../middleware/auth');

router.get('/', auth, tipsController.getTips);
router.get('/:id', auth, tipsController.getTip);
router.post('/', auth, tipsController.createTip);
router.put('/:id', auth, tipsController.updateTip);
router.delete('/:id', auth, tipsController.deleteTip);

module.exports = router;
