const mongoose = require('mongoose');


//Mongodb connection
mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://localhost:27017/reactnode_App',{ useNewUrlParser: true })
    .then( () => {
        console.log('MongoDb connection established successfully');
    })
    .catch(err => {
        console.log(err)
    })