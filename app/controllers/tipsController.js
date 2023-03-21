const TableTip = require('../models/Tabletip');
const RestaurantTable = require('../models/RestaurantTable');

exports.getTips = async (req, res) => {
    try {
        const tips = await TableTip.findAll();
        res.status(200).json({ tips });
    } catch (error) {
        res.status(500).json({ error });
    }
};

exports.getTip = async (req, res) => {
    const { id } = req.params;

    try {
        const tip = await TableTip.findByPk(id);
        if (!tip) {
            return res.status(404).json({ error: 'Tip not found' });
        }
        res.status(200).json({ tip });
    } catch (error) {
        res.status(500).json({ error });
    }
};

exports.createTip = async (req, res) => {
    const { tips, id_service, id_restaurantTable } = req.body;
    try {
        const restaurantTable = await RestaurantTable.findByPk(id_restaurantTable);
        if (!restaurantTable) {
            return res.status(404).json({ error: "Restaurant table not found" });
        }
        const newTableTip = await TableTip.create({ tips, id_restaurantTable, id_service });
        res.status(201).json({ tabletip: newTableTip });
    } catch (error) {
        res.status(400).json({ error });
    }
};

exports.updateTip = async (req, res) => {
    const { id } = req.params;
    const { amount, id_user } = req.body;
    try {
        const tip = await TableTip.findByPk(id);
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
        const tip = await TableTip.findByPk(id);
        if (!tip) {
            return res.status(404).json({ error: 'Tip not found' });
        }
        await tip.destroy();
        res.status(204).json({ message: 'Tip deleted' });
    } catch (error) {
        res.status(500).json({ error });
    }
};

exports.createTable = async (req, res) => {
    const { name } = req.body;

    try {
        const newTable = await RestaurantTable.create({ name });
        res.status(201).json({ table: newTable });
    } catch (error) {
        res.status(400).json({ error });
    }
};
