const express = require("express")
const router = express.Router()
const { home, auth } = require('../controllers')

router.get('/', home.index)

router.get('/login', auth.login)
router.get('/register', auth.register)

module.exports = router
