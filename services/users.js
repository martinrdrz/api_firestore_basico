const { obtenerDocumentos } = require('../helpers/obtenerDocumentos');
const { db } = require('../database/config');

const getUsers = async () => {
    const collectionRef = db.collection('dispositivos');
    const snapshot = await collectionRef.get();
    const documentos = obtenerDocumentos(snapshot);
    return documentos;
};

const getUser = async (id = null) => {
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

const createUser = (user = {}) => {
    return { result: 'Usuario Creado' };
};

const updateUser = (user = {}) => {
    return { result: 'Usuario Actualizado' };
};

module.exports = { getUsers, getUser, createUser, updateUser };
