const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName: { type: String, required: true },
    productPrice: {type: Number, required: true }
    //Connect with Product Schema with realationship database 
});

module.exports = mongoose.model('Product', productSchema);