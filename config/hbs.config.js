const hbs = require("hbs")

hbs.registerPartials(__dirname + "/../views/partials")

hbs.registerHelper('totalPrice', function (products) {
    return products.reduce((acumulador, product) => acumulador + product.price, 0)
})

hbs.registerHelper('count', function (products) {
    let count = 0
    
    for (let i = 0; i < products.length; i++) {
        count++
    }

    return count
})

hbs.registerHelper('prural', function (products) {

    if (products <= 1) {
        return ""
    }
    else {
        return "s"
    }
})


