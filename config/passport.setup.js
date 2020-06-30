const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2');
const key = require('./keys');
const User = require('../model/User.Model');
const { deserializeUser } = require('passport');

// Serializing the User (to the browser Cookies)
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// Deserializing the User (from browser Cookies)
passport.deserializeUser((id, done) => {
    User.findById(id).then((user) =>{
        done(null, user);
    })
});

passport.use(
    new GoogleStrategy({
        // Options for the google strategy
        
        callbackURL : '/auth/redirected',
        clientID : key.google.clientID,
        clientSecret : key.google.clientSecret
    }, (accessToken, refreshToken, profile, done) => {
        // Passports callback function 
        // Finding the User is Already exists in out databse

        User.findOne({GoogleID : profile.id})
        .then((curUser) => {
            if(curUser)
            {   // User Already Exists
                console.log("Already Logged USER (OLD USER) => Hi " + curUser.name);
                done(null, curUser);
            }
            else
            {   // User is new to out site and SAVE the credentials

                new User({
                    name : profile.displayName,
                    email : profile.email,
                    ImageURL : profile.picture,
                    GoogleID : profile.id
                }).save().then((result) => {
                    console.log('New User Data Stored is : ' + result);
                    done(null, result);
                })
                .catch((err) => {
                    console.error(err);
                });
            }   
        })
        .catch((err) => {
            console.error(err);
        })
    })
)