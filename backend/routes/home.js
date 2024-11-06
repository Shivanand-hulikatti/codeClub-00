const express = require('express');
const verifyCookie = require('../controllers/home');
const cookieParser = require('cookie-parser');
const { Question } = require('../models/user');
const route = express.Router();
route.use(cookieParser());

route.get('/',verifyCookie,async (req,res)=>{
    // here we will show the questions from the database and onclicking particular question we will take the user to codeforces question page of that perticular question
    try{
        const questions = await Question.find();
        res.send(questions);
    }catch(error){
        res.status(500).send({ message: 'Internal Server Error', error: error.message });
    }
});

route.post('/', verifyCookie, async (req, res) => {
    const user = req.user;    
    try {
        if (user.role === 'admin') {
            const { contestId, index, name, dayNumber } = req.body;
            const question = await Question.create({
                contestId,
                index,
                name,
                dayNumber
            });
            return res.status(201).send({ message: 'Question Added Successfully', questionName: question.name });
        }
        res.status(403).send({ message: 'Forbidden: You do not have the required permissions' });
    } catch (error) {
        res.status(500).send({ message: 'Internal Server Error', error: error.message });
    }
});


module.exports = route;