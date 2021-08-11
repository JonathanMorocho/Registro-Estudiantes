const mongoose = require('mongoose');
const User = require ('../models/User');

const findAllUsers = (req, res) => {
    User.find((err, users) => {
        err && res.send(500).send(err.message);

        res.status(200).json(users);
    })
}

const findById = (req, res) => {
    User.findById(req.params.id, (err,user) => {
        err && res.status(500).send(err.message);

        res.status(200).json(user);
    })
}

const addUser = (req, res) => {
    let user = new User ({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        DNI: req.body.DNI,
        address: req.body.address,
        telephone: req.body.telephone,
        email: req.body.email,
        age: req.body.age
    });
    user.save((err, usr) =>{
        err && res.status(500).send(err.message);

        res.status(200).json(usr);
    });
};

module.exports = {findAllUsers, findById, addUser};