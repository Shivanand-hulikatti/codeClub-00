const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    cfHandle: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: 'NORMAL'
    },
},{
    timestamps: true
});

const User = mongoose.model('User', userSchema);