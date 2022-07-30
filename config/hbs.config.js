const hbs = require("hbs")

hbs.registerPartials(__dirname + "/../views/partials")

hbs.registerHelper('prettyDate', (date) => {
    date.toLocaleDateString()
})
