const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const { User } = require('../models/user');


async function verifyCookie(req, res, next) {
    if (!req.cookies) {
        return res.status(400).json({ message: 'No cookies found.' });
    }
    
    const token = req.cookies.user;
    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }    
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = await User.findById(decoded.userId);
        next();
    } catch (ex) {
        res.status(400).json({ message: 'Invalid token.' });
    }
}

module.exports = verifyCookie;