const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
    
});

//crete models
module.exports = model('userlogin', userSchema);