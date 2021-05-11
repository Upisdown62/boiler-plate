const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type: String,
        maxLength: 50
    },
    email:{
        type: String,
        trim: true, //space를 없애주는
        unique: 1
    },
    password:{
        type: String,
        minLength: 5
    },
    lastname:{
        type: String,
        maxLength: 50
    },
    role:{
        type: Number,
        default: 0
    },
    image: String,
    token:{
        type: String
    },
    tokenExp:{
        type: Number
    }
})

const User = mongoose.model('User', userSchema)

module.exports = {User}