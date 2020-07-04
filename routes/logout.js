const logoutRoute = require('express').Router();

logoutRoute.get('/', (req, res) => {
    req.logOut();
});

module.exports = logoutRoute;