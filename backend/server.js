// for run this server type : npm run dev
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//mongodb connection
require('./models/db.models');

// Add router
const registerRouter = require('./routes/register.routes');
const loginRouter = require('./routes/login.routes');
const userRouter = require('./routes/user.routes');

app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/login/user', userRouter);

// for heroku
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
})