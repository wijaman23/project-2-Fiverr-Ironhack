const { User } = require("../models")

module.exports.detail = (req, res, next) => {
    res.render('user/detail')
}