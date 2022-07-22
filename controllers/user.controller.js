const mongoose = require('mongoose')
const { User } = require("../models")

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
    res.render('auth/profile')
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
    res.render('auth/login')
    req.session.destroy()
}

