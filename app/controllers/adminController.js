const Admin = require('../models/Admin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.createAdmin = async (req, res) => {
    const { pincode } = req.body;

    try {
        const hashedPincode = await bcrypt.hash(pincode, 10);
        const newAdmin = await Admin.create({ pincode: hashedPincode });

        res.status(201).json({ admin: newAdmin });
    } catch (error) {
        res.status(400).json({ error });
    }
};

exports.login = async (req, res) => {
    const { pincode } = req.body;

    try {
        const admin = await Admin.findOne();

        if (!admin) {
            return res.status(404).json({ error: 'Admin not found' });
        }

        const isMatch = await bcrypt.compare(pincode, admin.pincode);

        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid pincode' });
        }

        const token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ error });
    }
};
