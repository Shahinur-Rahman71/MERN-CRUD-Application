const router = require('express').Router();
const User = require('../models/user.models');

// find user information
router.route('/').get((req, res) => {
    User.find()
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))
});

// add user information
router.route('/adduser').post((req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const email = req.body.email;

    const newUser = new User({
        id,
        name,
        email
    });

    newUser.save()
        .then(() => res.json('New User Added'))
        .catch(err => res.status(400).json(err))

});

// find unique user
router.route('/:id').get((req,res) => {
    User.findById(req.params.id)
        .then((data)=> res.json(data))
        .catch( err => console.log(err))
});

// delete user
router.route('/:id').delete((req,res) => {
    User.findByIdAndDelete(req.params.id)
        .then(()=> res.json("User Deleted"))
        .catch( err => console.log(err))
})

// Update user information
router.route('/update/:id').post( (req, res) => {
    User.findById(req.params.id)
        .then( datas => {
            datas.id = req.body.id,
            datas.name = req.body.name,
            datas.email = req.body.email

            datas.save()
                .then( () => res.json('User Updated'))
                .catch( err => console.log(err))
        })
        .catch( err => console.log(err))
})

module.exports = router;