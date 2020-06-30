const Authrouter = require('express').Router();
const passport = require('passport');

Authrouter.get('/', (req, res) => {
    res.status(200).send('This the the authentication home page');
});

const isAuths = (req, res, next) => {
    if(!req.user){
        next();
    }
    else{
        res.redirect('/dashboard');
    }
}

Authrouter.get('/login',isAuths, passport.authenticate('google', {
    scope : ['profile','email']
}));

Authrouter.get('/redirected', passport.authenticate('google'), (req, res) => {
    // After successfull signup or sign in
    //  Users getting resirected
    // res.status(200).send('you are logged in' + req.user);

    res.redirect('/dashboard/');
});

module.exports = Authrouter;