const { Router } = require('express');
const router = Router();
const { getDevices, getDevice, createDevice, updateDevice } = require('../controllers/devices');

router.get('/read', getDevices);

router.get('/read/:id', getDevice);

router.post('/write', createDevice);

router.post('/update', updateDevice);

module.exports = router;
