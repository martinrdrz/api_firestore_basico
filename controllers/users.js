const { response, request } = require('express');
const services = require('../services/users');

const getUsers = (req = request, res = response) => {
    return res.status(200).json(services.getUsers());
};

const getUser = (req = request, res = response) => {
    const { id } = req.params;
    return res.status(200).json(services.getUser(id));
};

const createUser = (req = request, res = response) => {
    return res.status(200).json(services.createUser());
};

const updateUser = (req = request, res = response) => {
    return res.status(200).json(services.updateUser());
};

module.exports = { getUsers, getUser, createUser, updateUser };
