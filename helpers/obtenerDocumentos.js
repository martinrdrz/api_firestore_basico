const obtenerDocumentos = (snapshot) => {
    const documentos = [];

    if (snapshot.empty) {
        console.log('No se encontraron documentos.');
        return documentos;
    }

    snapshot.docs.map((doc) => {
        documentos.push({
            id: doc.id,
            ...doc.data(),
        });
    });
    // snapshot.forEach((doc) => {
    //     documentos.push({
    //         id: doc.id,
    //         ...doc.data(),
    //     });
    // });
    return documentos;
};

module.exports = { obtenerDocumentos };
