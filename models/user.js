//Require Mongoose
var mongoose = require('mongoose');

//Define a user schema
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    email: String
});

module.exports = mongoose.model('userModel', userSchema );