const TipsPayment = require("../models/TipsPayment");

exports.createTipsPayment = async function (req, res) {
    try {
        const { amount, id_user } = req.body;
        const newTipsPayment = await TipsPayment.create({
            amount,
            id_user,
        });
        res.status(201).json(newTipsPayment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.getTipsPaymentById = async function (req, res) {
    try {
        const { id } = req.params;
        const tipsPayment = await TipsPayment.findByPk(id);
        if (!tipsPayment) {
            res.status(404).json({ message: "TipsPayment not found" });
        } else {
            res.status(200).json(tipsPayment);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.updateTipsPaymentById = async function (req, res) {
    try {
        const { id } = req.params;
        const { amount, id_user } = req.body;
        const tipsPayment = await TipsPayment.findByPk(id);
        if (!tipsPayment) {
            res.status(404).json({ message: "TipsPayment not found" });
        } else {
            tipsPayment.amount = amount;
            tipsPayment.id_user = id_user;
            await tipsPayment.save();
            res.status(200).json(tipsPayment);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.deleteTipsPaymentById = async function (req, res) {
    try {
        const { id } = req.params;
        const tipsPayment = await TipsPayment.findByPk(id);
        if (!tipsPayment) {
            res.status(404).json({ message: "TipsPayment not found" });
        } else {
            await tipsPayment.destroy();
            res.status(204).end();
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};
