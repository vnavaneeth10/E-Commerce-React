const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price:String,
    description:String,
    rating:String,
    images: [
        {
            image:String
        }
    ],
    category: String,
    seller:String,
    stock: String,
    numbOfReviews: String,
    createdAt:Date
});

const productModel = mongoose.model('Product', productSchema);

module.exports= productModel;