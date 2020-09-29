const router = require('express').Router();
const Login = require('../models/login.models');

router.route('/').get((req, res) => {
    Login.find()
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))
});

router.route('/addlogin').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const newLogin = new Login({
        username,
        password
    });

    newLogin.save()
        .then(() => res.json('Login successfully done'))
        .catch(err => res.status(400).json(err))

});

module.exports = router;