const mongoose = require('mongoose')
const { schema } = require('./product')
const Schema = mongoose.Schema

const userSchema = Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('User', userSchema)
