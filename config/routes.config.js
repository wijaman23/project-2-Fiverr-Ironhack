const express = require("express")
const router = express.Router()
const { user, product } = require('../controllers')
const secure = require("../middlewares/secure.mid");

router.get('/', user.index)
router.get('/login', user.login)
router.post('/login', user.doLogin)
router.get('/register', user.register)
router.post('/register', user.doRegister)
router.get('/profile/:id', secure.isloged, user.profile)
router.get('/logout', secure.isloged, user.logout)
router.get('/profile/:id/edit', secure.isloged, user.edit)
router.post('/profile/:id', secure.isloged, user.doEdit)

router.get('/newProduct', secure.isloged, product.newProduct)
router.post('/newProduct', secure.isloged, product.createProduct)
router.get('/:id', secure.isloged, product.detailProduct)
router.post('/product/:id/delete', secure.isloged, product.deleteProduct)
router.get('/product/:id/edit', secure.isloged, product.editProduct)
router.post('/product/:id', secure.isloged, product.doEditProduct);

module.exports = router
