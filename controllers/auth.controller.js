const { User } = require("../models")

module.exports.login = (req, res, next) => {
    res.render('auth/login')
}
module.exports.register = (req, res, next) => {
    res.render('auth/register')
}
module.exports.doRegister = (req, res, next) => {

    User.create(req.body)
        .then(() => res.redirect('detail'))
        .catch((error) => next(error))
}