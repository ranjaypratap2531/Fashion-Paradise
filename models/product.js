const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = Schema({
    title:{
        type:String,
        required: true,
        unique: true,

    },
    imagePath:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Category'
    },
    quantity:{
        type:Number,
        required:true
    },
    available:{
        type:Boolean,
        required:true
    }


})

module.exports = mongoose.model('Product', productSchema)