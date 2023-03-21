const TipPayment = require('../models/TipPayment');

exports.getTips = async (req, res) => {
    try {
        const tips = await TipPayment.findAll();
        res.status(200).json({ tips });
    } catch (error) {
        res.status(500).json({ error });
    }
};

exports.getTip = async (req, res) => {
    const { id } = req.params;

    try {
        const tip = await TipPayment.findByPk(id);
        if (!tip) {
            return res.status(404).json({ error: 'Tip not found' });
        }
        res.status(200).json({ tip });
    } catch (error) {
        res.status(500).json({ error });
    }
};

exports.createTip = async (req, res) => {
    const { amount, id_user } = req.body;

    try {
        const newTip = await TipPayment.create({ amount, id_user });
        res.status(201).json({ tip: newTip });
    } catch (error) {
        res.status(400).json({ error });
    }
};

exports.updateTip = async (req, res) => {
    const { id } = req.params;
    const { amount, id_user } = req.body;
    try {
        const tip = await TipPayment.findByPk(id);
        if (!tip) {
            return res.status(404).json({ error: 'Tip not found' });
        }
        tip.amount = amount;
        tip.id_user = id_user;
        await tip.save();
        res.status(200).json({ tip });
    } catch (error) {
        res.status(400).json({ error });
    }
};

exports.deleteTip = async (req, res) => {
    const { id } = req.params;
    try {
        const tip = await TipPayment.findByPk(id);
        if (!tip) {
            return res.status(404).json({ error: 'Tip not found' });
        }
        await tip.destroy();
        res.status(204).json({ message: 'Tip deleted' });
    } catch (error) {
        res.status(500).json({ error });
    }
};
