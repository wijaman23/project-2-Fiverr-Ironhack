const hbs = require("hbs")

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



