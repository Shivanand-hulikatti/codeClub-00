const express = require('express');
const { connect } = require('./connect');

const app = express();
const PORT = process.env.PORT || 3000;

const userRoutes = require('./routes/user');

connect();

app.use(express.json());

app.use('/api/user',userRoutes);

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});