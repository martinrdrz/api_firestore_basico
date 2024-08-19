const { response, request } = require('express');
const servicesDevices = require('../services/devices');

const getDevices = async (req = request, res = response) => {
    const docs = await servicesDevices.getDevices();
    return res.status(200).json(docs);
};

const getDevice = async (req = request, res = response) => {
    const { id } = req.params;
    const doc = await servicesDevices.getDevice(id);
    return res.status(200).json(doc);
};

const createDevice = (req = request, res = response) => {
    return res.status(200).json(servicesDevices.createDevice());
};

const updateDevice = async (req = request, res = response) => {
    const { id } = req.params;
    const body = req.body;
    const result = await servicesDevices.updateDevice(id, body);
    return res.status(200).json(result);
};

module.exports = { getDevices, getDevice, createDevice, updateDevice };
