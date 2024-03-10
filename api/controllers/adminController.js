const mongoose = require('mongoose');
const Admin = require('../models/adminSchema');
const bcrypt = require('bcryptjs');

const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        console.log(req.body);
        console.log(email, password);

        if (!email || !password) {
            return res.send({ status: 400 });
        }

        const ad = await Admin.findOne({ email: req.body.email });

        if (ad == null) {
            return res.send({ status: 400 });
        }

        // const isMatch = await bcrypt.compare(password, ad.password);

        // if (!isMatch) {
        if (ad.password != password) {
            return res.send({ status: 400 });
        }

        console.log(ad);

        res.send(ad);
    }
    catch (err) {
        res.status(500).json({ err });
    }
}

const getAllAdmin = async (req, res) => {
    try {
        const allAdmin = await Admin.find();

        return res.status(200).json(allAdmin);
    }
    catch (err) {
        return res.status(500).json(err);
    }
}


module.exports = { adminLogin, getAllAdmin }