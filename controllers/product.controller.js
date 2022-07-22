const { Product } = require("../models")
const categoryProduct = require("../data/category.json")

module.exports.newProduct = (req, res, next) => {
    res.render('products/newProduct', {categoryProduct}) 
}

module.exports.createProduct = (req, res, next) => {
    const data = req.body
  
    Product.create(data)
      .then(() => res.redirect('/'))
      .catch((error) => next(error))
}

module.exports.detailProduct = (req, res, next) => {
    Product.findById(req.params.id)
        .then(product => res.render('products/detailProduct', {product}))
        .catch((error) => next(error))
}
module.exports.deleteProduct = (req, res, next) => {
    const id = req.params.id
  
    Product.findByIdAndDelete(id)
      .then(() => res.redirect('/'))
      .catch((error) => next(error))
}
