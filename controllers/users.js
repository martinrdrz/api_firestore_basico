const { response, request } = require('express');
const services = require('../services/users');

const getUsers = async (req = request, res = response) => {
    const docs = await services.getUsers();
    return res.status(200).json(docs);
};

const getUser = async (req = request, res = response) => {
    const { id } = req.params;
    const doc = await services.getUser(id);
    return res.status(200).json(doc);
};

const createUser = (req = request, res = response) => {
    return res.status(200).json(services.createUser());
};

const updateUser = (req = request, res = response) => {
    return res.status(200).json(services.updateUser());
};

module.exports = { getUsers, getUser, createUser, updateUser };
