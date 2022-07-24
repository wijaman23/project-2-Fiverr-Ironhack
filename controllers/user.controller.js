const mongoose = require('mongoose')
const { Product, User } = require("../models")
const categoryProduct = require("../data/category.json")

module.exports.index = (req, res, next) => {
  const searchCategory = req.query.category

  if (searchCategory) {
      Product.find({category: {$in: searchCategory}})

          .populate('maker')

          .then(products => res.render('index', {products, categoryProduct}))
          .catch((error) => next(error))
  } else {
      Product.find()
      .populate('maker')
          .then(products => res.render('index', {products, categoryProduct}))
          .catch((error) => next(error))
  }
}
module.exports.login = (req, res, next) => {
    res.render('auth/login')
}
module.exports.register = (req, res, next) => {
    res.render('auth/register')
}
module.exports.doRegister = (req, res, next) => {

    User.create(req.body)
        .then(() => res.redirect('/login'))
        .catch((error) => next(error))
}
module.exports.profile = (req, res, next) => {
    User.findById(req.params.id)
        .populate({
            path : 'products',        
            populate : {
              path : 'maker',
              select: 'name'
            }
        })
        .then(user => {
            if (user) {
              res.render('auth/profile', { user })
            } else {
              res.redirect('/')
            }
          })
        .catch((error) => next(error))
}

module.exports.doLogin = (req, res, next) => {

    function renderInvalidLogin() {
        res.status(400).render('auth/login', {
          user: req.body,
          errors: { password: 'Email o contraseña incorrecto' }
        });
    }
    
    const { email, password } = req.body

      User.findOne({ email })
        .then(user => {
          if (!user) {
            renderInvalidLogin()
          } else {
            return user.checkPassword(password)
              .then(match => {
                if (match) {
                  req.session.userId = user.id
                  res.redirect('/')
                } else {
                  renderInvalidLogin()
                }
              })
          }
        })
        .catch((error) => next(error))
}
module.exports.logout = (req, res, next) => {
    res.redirect('/')
    req.session.destroy()
}
module.exports.edit = (req, res, next) => {
    res.render('auth/edit')
}


