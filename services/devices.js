const { obtenerDocumentos } = require('../helpers/obtenerDocumentos');
const { db } = require('../database/config');

const getDevices = async () => {
    const collectionRef = db.collection('dispositivos');
    const snapshot = await collectionRef.get();
    const documentos = obtenerDocumentos(snapshot);
    return documentos;
};

const getDevice = async (id = null) => {
    const docRef = db.collection('dispositivos').doc(id);
    const doc = await docRef.get();
    let document = {};
    if (!doc.exists) {
        console.log('No se encontró el documento.');
    } else {
        document = {
            id: doc.id,
            ...doc.data(),
        };
    }
    return document;
};

const createDevice = (device = {}) => {
    return { result: 'Usuario Creado' };
};

const updateDevice = async (id, body) => {
    const docRef = db.collection('dispositivos').doc(id);
    await docRef.update(body);
    //console.log(id);
    //console.log(body);
    return { result: 'Usuario Actualizado' };
};

module.exports = { getDevices, getDevice, createDevice, updateDevice };
