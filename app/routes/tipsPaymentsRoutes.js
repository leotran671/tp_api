const express = require("express");
const router = express.Router();
const { createTipsPayment, getTipsPaymentById, updateTipsPaymentById, deleteTipsPaymentById } = require('../controllers/tipsPayments');

router.post("/", createTipsPayment);
router.get("/:id", getTipsPaymentById);
router.put("/:id", updateTipsPaymentById);
router.delete("/:id", deleteTipsPaymentById);

module.exports = router;
