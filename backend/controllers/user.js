const { User } = require('../models/user');

async function registerHandler(req, res) {
    const cfHandle = req.params.cf;
    const usn = req.body.usn;
    if (!usn || !cfHandle) {
        return res.status(400).json({ message: 'USN and CF Handle are required' });
    }
    try {
        const alreadyExist = await User.findOne({ usn, cfHandle });
        if (alreadyExist) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const user = await User.create({
            usn,
            cfHandle
        });
        res.cookie('user', user, { httpOnly: true, secure: true });
        return res.status(201).json(user);
    } catch (err) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

async function loginHandler(req, res) {
    const cfHandle = req.params.cf;
    const usn = req.body.usn;
    if (!cfHandle && !usn) {
        return res.status(400).json({ message: 'CF Handle or USN is required' });
    }
    try {
        let user;
        if (!usn) {
            user = await User.findOne({ cfHandle });
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
        } else if (!cfHandle) {
            user = await User.findOne({ usn });
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
        }
        res.cookie('user', user, { httpOnly: true, secure: true });
        return res.status(200).json(user);
    } catch (err) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = {
    registerHandler,
    loginHandler
};
