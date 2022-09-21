const mongoose = require('mongoose')
const { schema } = require('./product')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-updater')
mongoose.plugin(slug)


const typeSchema = schema({
    title:{
        type: String,
        required:true
    },
    slug:{
        type:String,
        unique: true,
        slug: 'title'
    }
})

module.exports = mongoose.model('Type', typeSchema)