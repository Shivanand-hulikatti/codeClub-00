const express = require('express');
const { connect } = require('./connect');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

const userRoutes = require('./routes/user');
const homeRoutes = require('./routes/home');
 
connect();

app.use(express.json());

app.use('/api/user',userRoutes);
app.use('/api/home',homeRoutes);

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});