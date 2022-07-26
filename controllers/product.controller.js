const mongoose = require("mongoose");
const { Product, User } = require("../models")
const categoryProduct = require("../data/category.json")

module.exports.newProduct = (req, res, next) => {
    User.find()
        .then((maker) => {
            res.render("products/newProduct", { maker,  categoryProduct});
        })
        .catch((error) => next(error))
}

module.exports.createProduct = (req, res, next) => {
    const data = req.body
  
    Product.create(data)
      .then(() => res.redirect('/'))
      .catch((error) => next(error))
}

module.exports.detailProduct = (req, res, next) => {
    const id = req.params.id

    Product.findById(id)
        .then(product => res.render('products/detailProduct', {product}))
        .catch((error) => next(error))
}
module.exports.deleteProduct = (req, res, next) => {
    const id = req.params.id
  
    Product.findByIdAndDelete(id)
      .then(() => res.redirect("/"))
      .catch((error) => next(error))
}
module.exports.editProduct = (req, res, next) => {
    const id = req.params.id

    Product.findById(id)
    .then((product) => {
      if (product) {
        return User.find()
            .then(user => res.render('products/editProduct', { product, user, categoryProduct }))
      } else {
            res.redirect("/");
      }
    })
    .catch((error) => next(error));
}
module.exports.doEditProduct = (req, res, next) => {
    const data = ({ title, img, description, price, category } = req.body)
    const id = req.params.id
  
    Product.findByIdAndUpdate(id, data)
      .then((product) => {
        res.redirect(`/profile/${req.user.id}`);
      })
      .catch((error) => {
        if (error instanceof mongoose.Error.ValidationError) {
          User.find()
            .then((users) => {
              res.render("products/editProduct", {
                errors: error.errors,
                product: data,
                users,
              });
            })
            .catch(next);
        } else {
          next(error);
        }
      });
  };
