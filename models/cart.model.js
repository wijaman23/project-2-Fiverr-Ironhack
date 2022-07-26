const mongoose = require("mongoose")
const Schema = mongoose.Schema

const cartSchema = new Schema ({
        maker: { 
            type: Schema.Types.ObjectId, 
            ref: 'User' },
        quantity: {
            type: Number,
            required: true,
            min: [1, "Cantidad minima un producto"],
            },
        price: {
            type: Number,
            required: true,
            },
        total: {
            type: Number,
            required: true,
            },
})

const Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart