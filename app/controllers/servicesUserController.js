const Service = require('../models/Service');
const User = require('../models/User');
const ServiceUser = require('../models/ServiceUser')

const getServicesUsers = async (req, res) => {
    try {
        const servicesUsers = await ServiceUser.findAll();
        res.status(200).json({ servicesUsers });
    } catch (error) {
        res.status(500).json({ error });
    }
};

const assignServiceToUser = async (req, res) => {
    try {
        const { id_service, id_user } = req.body;

        const service = await Service.findByPk(id_service);
        const user = await User.findByPk(id_user);

        if (!service) {
            return res.status(404).json({ error: 'Service not found' });
        }

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const serviceUser = await ServiceUser.create({ id_service, id_user });

        res.status(201).json({ message: 'Service assigned to user successfully', serviceUser });
    } catch (error) {
        res.status(500).json({ error: 'Error assigning service to user', details: error.message });
    }
};

module.exports = {
    getServicesUsers,
    assignServiceToUser
};
