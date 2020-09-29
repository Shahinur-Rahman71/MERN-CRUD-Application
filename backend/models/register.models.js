const {Schema, model} = require('mongoose');

const registerSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    presentaddress: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
        minlength: 3
    }
    
});

//crete models
module.exports = model('register', registerSchema);