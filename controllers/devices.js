const { response, request } = require('express');
const services = require('../services/devices');

const getDevices = async (req = request, res = response) => {
    const docs = await services.getDevices();
    return res.status(200).json(docs);
};

const getDevice = async (req = request, res = response) => {
    const { id } = req.params;
    const doc = await services.getDevice(id);
    return res.status(200).json(doc);
};

const createDevice = (req = request, res = response) => {
    return res.status(200).json(services.createDevice());
};

const updateDevice = (req = request, res = response) => {
    return res.status(200).json(services.updateDevice());
};

module.exports = { getDevices, getDevice, createDevice, updateDevice };
