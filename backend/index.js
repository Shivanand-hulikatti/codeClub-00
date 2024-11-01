const express = require('express');
const { connect } = require('./connect');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

connect('mongodb://localhost:27017/test');

app.post('/api/login', (req, res) => {
    const cfHandle = req.body.cfHandle;

    if (!cfHandle) {
        return res.status(400).send('CF Handle is required');
    }

    const success = async () => {
        const response = await axios.get(`https://codeforces.com/api/user.info?handles=${cfHandle}`);
        console.log(response.data.result);
        if (response.data.status === 'OK') {
            return true;
        }
        return false;
    }

    res.send('Login successful');
});


app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});