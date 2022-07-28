const mongoose = require('mongoose')
const { Product, User, Cart } = require("../models")
const categoryProduct = require("../data/category.json")

module.exports.cart = (req, res, next) => {

    res.render('carts/buy')

    /*const productId = req.params.id
    let cart = new Cart(req.session.cart ? req.session.cart : {});

    Product.findById(productId)
        .then (() => {
            Cart.create (productId)
            req.session.cart = cart;
            res.render("carts/cart", {})
        })
        .catch((error) => next(error))*/
}

module.exports.buy = (req, res, next) => {
    res.render('carts/buy')
}
