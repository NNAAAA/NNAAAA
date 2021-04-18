const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    account: {
        type: String
    },
    email: {
        type: String,
    },
    password: {
        type: String,
        min: 8,
        max: 16
    },
    date: {
        type: Date,
    },
    country: {
        type: String
    }
},{
    versionKey: false // You should be aware of the outcome after set to false
});
module.exports = mongoose.model('User', UserSchema)