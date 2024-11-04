const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
    }
};

module.exports = {
    connect
};