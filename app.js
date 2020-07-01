// SERVER App requirements
const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const cors = require('cors');
const path = require('path');

// MODULE requirements
const Oauth = require('./routes/Oauth.login');
const isAuths = require('./routes/isauths');
const passportConfig = require('./config/passport.setup');
const keys = require('./config/keys');

// Mongoose connection
mongoose.connect(keys.mongodb.dbURI, {useNewUrlParser: true, useUnifiedTopology: true }, (err, result) => {
    if(err)
        console.log('Database server not connected Successfully' + err);
    else
        console.log('Database server connected Successfully' + result);
})

// SERVER App usages
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use(passport.initialize());
app.use(passport.session());

// Cookie configuration
app.use(cookieSession({
    maxAge : 60 * 1000,
    keys : [keys.session.sessionSecretKey]
}));

// Passport initialization

// SERVER app routes
app.use('/auth', Oauth);
app.use('/isauth', isAuths);

const port = process.env.port || 3001;

app.listen(port, () => console.log(`API running in the port ==> ${port}`));