const express = require("express")
const router = express.Router()
const { home, user, product } = require('../controllers')

router.get('/', home.index)

router.get('/login', user.login)
router.post('/login', user.doLogin)
router.get('/register', user.register)
router.post('/register', user.doRegister)
router.get('/profile/:id', user.profile)
router.get('/logout', user.logout)

router.get('/newProduct', product.newProduct)
router.post('/newProduct', product.createProduct)
router.get('/:id', product.detailProduct)
router.post('/product/:id/delete', product.deleteProduct)

module.exports = router