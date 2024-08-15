require('dotenv').config();
const { initializeApp, applicationDefault } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

initializeApp({
    credential: applicationDefault(),
});

const db = getFirestore();
console.log('Conxion con base datos creada');

module.exports = {
    db,
};
