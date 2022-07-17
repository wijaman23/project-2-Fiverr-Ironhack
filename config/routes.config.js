const express = require("express")
const router = express.Router()
const { home, auth } = require('../controllers')

router.get('/', home.index)

router.get('/login', auth.login)

module.exports = router
