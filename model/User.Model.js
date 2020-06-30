const mongoose = require('mongoose');
const schema = mongoose.Schema;

const UserSchema = new schema({
    name : String,
    email : String,
    ImageURL : String,
    GoogleID : String
});

const User = mongoose.model('user',UserSchema);

module.exports = User;