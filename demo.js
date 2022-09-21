const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    title: 'Disnet-Stay Goofy',
    description: 'layred t shirt',
    price: 400,
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

