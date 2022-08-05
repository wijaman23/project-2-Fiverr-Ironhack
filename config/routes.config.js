const express = require("express")
const router = express.Router()
const { user, product, cart } = require('../controllers')
const secure = require("../middlewares/secure.mid");

router.get('/', user.index)
router.get('/login', user.login)
router.post('/login', user.doLogin)
router.get('/register', user.register)
router.post('/register', user.doRegister)
router.get('/profile/:id', secure.isloged, user.profile)
router.get('/logout', secure.isloged, user.logout)
router.get('/profile/:id/edit', secure.isloged, user.edit)
router.post('/profile/:id/edit', secure.isloged, user.doEdit)
router.get('/record/:id', secure.isloged, user.record)

router.get('/newProduct', secure.isloged, product.newProduct)
router.post('/newProduct', secure.isloged, product.createProduct)
router.get('/details/:id', secure.isloged, product.detailProduct)
router.post('/product/:id/delete', secure.isloged, product.deleteProduct)
router.get('/product/:id/edit', secure.isloged, product.editProduct)
router.post('/product/:id/edit', secure.isloged, product.doEditProduct);

router.get('/cart', secure.isloged, cart.cart)
router.post('/cart', secure.isloged, cart.addCart)
router.get('/cart/buy', secure.isloged, cart.buy)
router.post('/cart/buy', secure.isloged, cart.doBuy)
router.get('/cart/finished', secure.isloged, cart.finished)

module.exports = router
