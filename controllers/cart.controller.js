module.exports.cart = (req, res, next) => {
    res.render('carts/cart')
}

module.exports.buy = (req, res, next) => {
    res.render('carts/buy')
}