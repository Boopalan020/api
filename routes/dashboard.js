const dashRoute = require('express').Router();

const isAuth = (req, res, next) => {
    if(!req.user) { // User Not logged In.... Redirecting them to log in page
        res.redirect('/auth/login');
    }
    else{
        // Go ahead to dashboard
        next();
    }
}

dashRoute.get('/', isAuth, (req, res) => {
    res.send('You are logged in as ' + req.user.name );
});

module.exports = dashRoute;