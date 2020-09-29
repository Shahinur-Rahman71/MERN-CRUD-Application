const {Schema, model} = require('mongoose');

const loginSchema = new Schema({
    
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
    
});

//crete models
module.exports = model('login', loginSchema);