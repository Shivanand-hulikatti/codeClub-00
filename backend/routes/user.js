const express = require('express');
const { registerHandler } = require('../controllers/user');
const route = express.Router();

route.POST('/register',registerHandler);
route,POST('/login',loginHandler);

module.exports = route;