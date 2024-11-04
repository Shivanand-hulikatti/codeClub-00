const express = require('express');
const { registerHandler, loginHandler } = require('../controllers/user');
const route = express.Router();

route.post('/register',registerHandler);
route.post('/login',loginHandler);

module.exports = route;