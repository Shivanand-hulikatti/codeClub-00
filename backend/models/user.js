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
    role:{
        type: String,
        default: 'user'
    }
},
{
    timestamps: true
});

const solvedProblemsSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    problemIds: [{
        contestId: {
            type: Number,
            required: true
        },
        problemIndex: {
            type : String,
            required: true
        }
    }]
});

const User = mongoose.model('User', userSchema);
const SolvedProblems = mongoose.model('SolvedProblems', solvedProblemsSchema);

module.exports = { User, SolvedProblems };