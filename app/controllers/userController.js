const User = require('../models/User');

exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json({ users });
    } catch (error) {
        res.status(500).json({ error });
    }
};

exports.getUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ error });
    }
};

exports.createUser = async (req, res) => {
    const { firstname, lastname, status, active } = req.body;
    try {
        const newUser = await User.create({ firstname, lastname, status, active });
        res.status(201).json({ user: newUser });
    } catch (error) {
        res.status(400).json({ error });
    }
};

exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { firstname, lastname, status, active } = req.body;

    try {
        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        user.firstname = firstname;
        user.lastname = lastname;
        user.status = status;
        user.active = active;
        await user.save();

        res.status(200).json({ user });
    } catch (error) {
        res.status(400).json({ error });
    }
};

exports.deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        user.firstname = 'Anonyme';
        user.lastname = 'Anonyme';
        user.active = 0;
        await user.save();

        res.status(204).json({ message: 'User deleted' });
    } catch (error) {
        res.status(500).json({ error });
    }
};

