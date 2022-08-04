const hbs = require("hbs")
const { options } = require("./routes.config")

hbs.registerPartials(__dirname + "/../views/partials")

hbs.registerHelper('totalPrice', function (products) {
    return products?.reduce((acumulador, product) => acumulador + product.productId.price, 0)
})

hbs.registerHelper('count', function (products) {
    return products?.length
})

hbs.registerHelper('prural', function (products) {
    if (products?.length <= 1) {
        return ""
    } else {
        return "s"
    }
})

hbs.registerHelper('totalPriceCost', function (products) {
    return products?.reduce((acumulador, product) => acumulador + product.productId.price, 20)
})

hbs.registerHelper('isSelected', function (product, category, options) {
    if (product.category === category) {
        return options.fn(this)
    } else {
        return options.inverse(this)
    }
})

hbs.registerHelper('recordFilter', function (user, status, userName, options) {
    if (user === userName && status === 'completed') {
       return options.fn(this)
    } else {
        return options.inverse(this)
    }
})



