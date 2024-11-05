const express = require('express');
const verifyCookie = require('../controllers/home');
const cookieParser = require('cookie-parser');
const route = express.Router();
route.use(cookieParser());

route.get('/',verifyCookie,async (req,res)=>{
    console.log(req.cookies.user);
    
    res.send('Welcome to the Home Page');
});


module.exports = route;