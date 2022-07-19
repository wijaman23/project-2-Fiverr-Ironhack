const { Product } = require("../models")

module.exports.index = (req, res, next) => {
    res.render('index')
}
