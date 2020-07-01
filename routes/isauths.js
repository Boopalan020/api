const express = require('express');
const authRoute = express.Router();
const User = require('../model/User.Model');

authRoute.use(express.json());

authRoute.post('/', (req, res) => {
    
    // // res.status(200).send(req.user);
    // res.status(200).send({user : req.user});
    User.findOne({GoogleID : req.body.token})
    .then(matchedUser => {
        console.log('Id mathced' + matchedUser);
        res.status(200).send(matchedUser);
    })
});

module.exports = authRoute;