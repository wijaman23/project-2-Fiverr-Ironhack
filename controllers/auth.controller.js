const { User } = require("../models")

module.exports.login = (req, res, next) => {
    res.render('auth/login')
}
module.exports.register = (req, res, next) => {
    res.render('auth/register')
}