const Service = require('../models/Service');

exports.getServices = async (req, res) => {
    try {
        const services = await Service.findAll();
        res.status(200).json({ services });
    } catch (error) {
        res.status(500).json({ error });
    }
};

exports.getService = async (req, res) => {
    const { id } = req.params;

    try {
        const service = await Service.findByPk(id);

        if (!service) {
            return res.status(404).json({ error: 'Service not found' });
        }

        res.status(200).json({ service });
    } catch (error) {
        res.status(500).json({ error });
    }
};

exports.createService = async (req, res) => {
    const { shiftType, shiftClosed } = req.body;

    try {
        const newService = await Service.create({ shiftType, shiftClosed });
        res.status(201).json({ service: newService });
    } catch (error) {
        res.status(400).json({ error });
    }
};

exports.updateService = async (req, res) => {
    const { id } = req.params;
    const { shiftType, shiftClosed } = req.body;

    try {
        const service = await Service.findByPk(id);
        if (!service) {
            return res.status(404).json({ error: 'Service not found' });
        }
        service.shiftType = shiftType;
        service.shiftClosed = shiftClosed;
        await service.save();

        res.status(200).json({ service });
    } catch (error) {
        res.status(400).json({ error });
    }
};

exports.deleteService = async (req, res) => {
    const { id } = req.params;
    try {
        const service = await Service.findByPk(id);
        if (!service) {
            return res.status(404).json({ error: 'Service not found' });
        }
        await service.destroy();
        res.status(204).json({ message: 'Service deleted' });
    } catch (error) {
        res.status(500).json({ error });
    }
};  