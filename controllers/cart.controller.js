const mongoose = require('mongoose')
const {Cart } = require("../models")
const { populate } = require('../models/user.model')
const { sendBuyEmail } = require('../config/mailer.config')

module.exports.cart = (req, res, next) => {
    Cart.findOne({userId: req.user.id, status: 'pending'})
        .populate('userId')
        .populate({
            path: 'products',
            populate: {
                path: 'productId'
            }
        })
        .then(cart => res.render('carts/cart', { cart }))
        .catch((error) => next(error))
}

module.exports.addCart = (req, res, next) => {
    Cart.findOne({ userId: req.user.id, status: 'pending'})
        .then(cart => {
            if(!cart) {
                return Cart.create({
                    userId: req.user._id , 
                    products: [{productId: req.body.productId, quanty: req.body.quanty}]    
                })
                .then(() => res.redirect('/cart'))
            } else {
                if (req.body.quanty < 1) {
                    cart.products = cart.products.filter(product => product.id !== req.body.productId)
                } else {
                    const product = cart.products.find(product => product.id === req.body.productId)

                    if (product) {
                        product.quanty = req.body.quanty
                    } else {
                        cart.products.push({productId: req.body.productId, quanty: req.body.quanty})
                    }
                } 
                return cart.save()
                    .then(() => res.redirect('/cart'))
            }
        })
        .catch((error) => next(error))
}

module.exports.buy = (req, res, next) => {
    Cart.findOne({userId: req.user.id, status: 'pending'})
        .populate('userId')
        .populate({
            path: 'products',
            populate: {
                path: 'productId'
            }
        })
        .then(cart => res.render('carts/buy', { cart }))
        .catch((error) => next(error))
}

module.exports.doBuy = (req, res, next) => {
    
    Cart.findOneAndUpdate({userId: req.user.id, status: 'pending'}, {status: 'completed'})
        .populate('userId')
        .then((user) => {
            sendBuyEmail(user)
            res.redirect('finished')
        })
        .catch((error) => next(error))
}

module.exports.finished = (req, res, next) => {
    res.render('carts/finished')
}
