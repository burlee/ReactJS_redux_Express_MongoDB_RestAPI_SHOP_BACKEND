const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName: { type: String, required: true },
    productPrice: {type: Number, required: true },
    productImgUrl: {
        type: String, 
        required: true,
        match: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
    }
    //Connect with Product Schema with realationship database 
});

module.exports = mongoose.model('Product', productSchema);