const router = require('express').Router();
const Register = require('../models/register.models');

router.route('/').get((req, res) => {
    Register.find()
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err))
});

router.route('/addregister').post( (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const presentaddress = req.body.presentaddress;
    const password = req.body.password;
    
    const newRegister = new Register({
        name,
        email,
        presentaddress,
        password
    });
// console.log(newRegister);
    newRegister.save()
        .then(()=> res.json('Register added'))
        .catch( (err)=> res.status(400).json(err))

});

module.exports = router;



