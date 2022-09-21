const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product')
const Category = require('./models/category')


const app = new express()


mongoose.connect('mongodb://localhost:27017/Fashion-Paradise', { useNewUrlParser: true})

    .then(()=>{
        console.log('you are now connected to mongo!')
    })
    .catch(()=>{
        console.log('something wrent wrong!')
    })

/*
//add data
const category = new Category({
    title:'Top Ware'
})
category.save((err, data2)=>{
    if(err){
        console.log(err)
    }
    console.log(data2)
})

const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    title: 'Disnet-Stay Goofy',
    description: 'layred t shirt',
    price: 400,
    category:'632b5885f1ebd6c5edf63a4b',
    imagePath: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1652942970_5721910.jpg?format=webp&w=376&dpr=1.0',
    available: true,
    quantity: 2,

})


product.save((err, data)=>{
    if(err){
        console.log(err)
    }
    console.log(data)
})

*/

Product.find()
    .populate('category')
    .exec((err,product)=>{
        if(err){
            console.log(err)
        }
        console.log(product)
        console.log(product.category.title)
      

    })












app.get('/', (req,res)=>{
    res.send('i love u deepika')
})

const port =  process.env.PORT || 4000

app.listen(port, ()=>{
    console.log('server is running on port ' + port)
})

