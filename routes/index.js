const { Router } = require('express');
const userApi = require('./user.routes');
const noteApi = require('./note.routes');

const api = Router();

api.use('/users', userApi);
api.use('/notes', noteApi);

module.exports = api;