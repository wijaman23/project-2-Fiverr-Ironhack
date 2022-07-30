const mongoose = require('mongoose')
const { Product, User, Cart } = require("../models")
const categoryProduct = require("../data/category.json")

module.exports.cart = (req, res, next) => {
    Cart.findOne({userId: req.user.id})
        //.populate('userId')
        .then(cart => res.render('carts/cart', { cart }))
        .catch((error) => next(error))
}

module.exports.buy = (req, res, next) => {
    res.render('carts/buy')
}

// POST /cart. { productId, quanty }
module.exports.addCart = (req, res, next) => {
    Cart.findOne({ userId: req.user.id})
        .then(cart => {
            if(!cart) {
                return Cart.create({
                    userId: req.user._id , 
                    products: [{productId: req.body.productId, quanty: req.body.quanty}]    
                },
                res.redirect('/cart'))
            } else {
                if (req.body.quanty < 1) {
                    cart.products = cart.products.filter(p => p.id !== req.body.productId)
                } else {
                    const product = cart.products.find(p => p.id === req.body.produdctId)

                    if (product) {
                        product.quanty = req.body.quanty
                    } else {
                        cart.products.push({productId: req.body.productId, quanty: req.body.quanty})
                    }
                } 
                return cart.save(), res.redirect('/cart')
            }
        })
        .catch((error) => next(error))
}
