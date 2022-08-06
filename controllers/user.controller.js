const mongoose = require('mongoose')
const { Product, User, Cart } = require("../models")
const categoryProduct = require("../data/category.json")

module.exports.index = (req, res, next) => {
  const searchCategory = req.query.category
  const searchTitle = req.query.title
  
  const criteria = {}

  if (searchCategory) {
    criteria.category = {$in: searchCategory}
  }

  if (searchTitle) {
    criteria.title= {$in: searchTitle}
  }

  Product.find(criteria)
      .populate('maker')
      .then(products => res.render('index', {products, categoryProduct, searchTitle}))
      .catch((error) => next(error))
}
module.exports.login = (req, res, next) => {
    res.render('auth/login')
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
      .catch((error) => {
        if (error instanceof mongoose.Error.ValidationError) {
          res.render('auth/login', { errors: error.errors, user })
        } else {
          next(error);
        }
      })
}
module.exports.register = (req, res, next) => {
    res.render('auth/register')
}
module.exports.doRegister = (req, res, next) => {
    const { email } = req.body

    function renderError (errors) {
      res.render("auth/register", { user: req.body, errors })
    }

    User.findOne({ email })
      .then(user => {
        if (user) {
            renderError({email: "Este email ya esta registrado"})
        } else {
            const user = req.body
            return User.create(user)
            .then((user) => res.redirect('/login'))
        }
    })
    .catch((error) => {
        if (error instanceof mongoose.Error.ValidationError) {
            renderError(error.errors)
        } else {
          next(error)
        }
      })
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
module.exports.logout = (req, res, next) => {
    res.redirect('/')
    req.session.destroy()
}
module.exports.edit = (req, res, next) => {
  const id = req.params.id
  
  User.findById(id)
    .then(user => res.render('auth/edit', {user}))
    .catch((error) => next(error));
}
module.exports.doEdit = (req, res, next) => {
  const data = ({name, email, img } = req.body)
  data.id = req.params.id
  const id = req.params.id

  User.findByIdAndUpdate(id, data, {runValidators: true})
    .then(() => res.redirect(`/profile/${req.user.id}`))
    .catch(error => {
      if (error instanceof mongoose.Error.ValidationError) {
        res.render('auth/edit', {
          errors: error.errors,
          user: data,
        })
      } else {
        next(error)
      }
    })
}
module.exports.record = (req, res, next) => {
   Cart.find()
    .populate('userId')
    .populate({
      path: 'products',
      populate: {
        path: 'productId',
        populate: {
          path: 'maker'
          }
      }
    })
    .then(carts => res.render('auth/record', {carts}))
    .catch((error) => next(error))
}






