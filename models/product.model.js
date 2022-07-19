const mongoose = require("mongoose")
const Schema = mongoose.Schema

const productSchema = new Schema ({
    title: {
        type: String,
        trim: true,
        required: [true, 'Se requiere titulo'],
        minLength: [3, 'Min 3 caracteres'],
    },
    description: {
        type: String,
        required: [true, 'Se requiere descripcion'],
        minLength: [10, 'Min 10 caracteres'],
    },
    img:{
        type: String,
        default: "https://demofree.sirv.com/nope-not-here.jpg",
        validate: {
            validator: function(img) {
                try {
                    new URL(img)
                    return true
                } catch (error) {
                    return false
                }
            },
            message: img => "Invalida URL"
        },
    },
    price:{
        type: Number,
    },
    category:{
        type: String,
        required: [true, 'Se requiere categoria'],
    },
})

productSchema.pre("validate", function (next) {
    this.img = this.img || undefined
    next()
})



const Product = mongoose.model('Product', productSchema)

module.exports = Product;