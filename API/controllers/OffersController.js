const ProductSchema = require('../model/ProductSchema');
const mongoose = require('mongoose');

exports.add_new_offer = ( req, res, next) => {
    const Product = new ProductSchema({
        productName: req.body.productName,
        productPrice: req.body.productPrice
    });

    Product
        .save()
        .then( productAdded => {
            res.status(201).json({
                message: "Produkt został dodany pomyślnie"
            });
        })
        .catch( error => {
            res.status(500).json({
                message: "Niestety produkt nie został dodany"
            });
        })
};

exports.get_all_offers = (req, res, next) => {
    ProductSchema
        .find()
        .select('_id productName productPrice')
        .exec()
        .then( productResult => {
            console.log( productResult )
            const product = {
                count: productResult.length,
                products: productResult.map( product => {
                    return{
                        id: product._id,
                        productName: product.productName,
                        productPrice: product.productPrice
                    }
                })
            }
            res.status(200).json(product)
        })
        .catch( error => {
            res.status(500).json({
                message: "Produkty nie zostały znalezione"
            })
        })
}
