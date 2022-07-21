const express = require("express")
const router = express.Router()
const { home, auth, product, user } = require('../controllers')

router.get('/', home.index)

router.get('/login', auth.login)
router.get('/register', auth.register)
router.post('/register', auth.doRegister)


router.get('/newProduct', product.newProduct)
router.post('/newProduct', product.createProduct)
router.get('/:id', product.detailProduct)

router.get('/detail', user.detail)

module.exports = router
