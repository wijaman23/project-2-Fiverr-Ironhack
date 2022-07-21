const { Product } = require("../models")
const categoryProduct = require("../data/category.json")

module.exports.index = (req, res, next) => {
    const searchCategory = req.query.category

    if (searchCategory) {
        Product.find({category: {$in: searchCategory}})
            .then(products => res.render('index', {products, categoryProduct}))
            .catch((error) => next(error))
    } else {
        Product.find()
            .then(products => res.render('index', {products, categoryProduct}))
            .catch((error) => next(error))
    }
}

