const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    usn: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 12,
        maxlength: 12,
        lowercase: true
    },
    cfHandle: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    points: {
        type: Number,
        default: 0
    },
    numberOfQuestionsSolved: {
        type: Number,
        default: 0
    },
    ratings: {
        type: Number,
        required: true,
        default: 0,
    },
    role:{
        type: String,
        enum: ['user','admin'],
        default: 'user'
    }
},
{
    timestamps: true
});

const questionSchema = new Schema({
    contestId: {
        type: Number,
        required: true,
    },
    dayNumber: {
        type: Number,
        required: true,
    },
    index: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    solvedBy : {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User',
        default : []
    }
})

const User = mongoose.model('User', userSchema);
const Question = mongoose.model('Question', questionSchema);

module.exports = { User,Question};