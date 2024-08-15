const { Router } = require('express');
const router = Router();
const { getUsers, getUser, createUser, updateUser } = require('../controllers/users');

router.get('/read', getUsers);

router.get('/read/:id', getUser);

router.post('/write', createUser);

router.post('/update', updateUser);

module.exports = router;
