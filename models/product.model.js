const mongoose = require("mongoose")
const Schema = mongoose.Schema
const categoryProduct = require("../data/category.json")

const productSchema = new Schema ({
    title: {
        type: String,
        trim: true,
        required: [true, 'Se requiere titulo'],
        minLength: [8, 'Min 8 caracteres'],
        maxLength: [80, 'Max 80 caracteres'],
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
        required: [true, 'Se requiere precio'],
    },
    category:{
        type: [{
            type: String,
            enum: categoryProduct
        }]
    },
    maker: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User',
      },
})

productSchema.pre("validate", function (next) {
    this.img = this.img || undefined
    next()
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product;