const getUsers = () => {
    return { user1: 'matias', user2: 'valentin' };
};

const getUser = (id = null) => {
    return { user1: 'matias' };
};

const createUser = (user = {}) => {
    return { result: 'Usuario Creado' };
};

const updateUser = (user = {}) => {
    return { result: 'Usuario Actualizado' };
};

module.exports = { getUsers, getUser, createUser, updateUser };
