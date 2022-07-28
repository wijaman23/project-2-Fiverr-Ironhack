const mongoose = require("mongoose")
const Schema = mongoose.Schema

const cartSchema = new Schema ({
        userId: { 
            type: Schema.Types.ObjectId, 
            ref: 'User' 
        }, 
        products: [{
            productId: {
                type: Schema.Types.ObjectId, 
                ref: 'Product'
            },
            quanty: {
                type: Number,
                minLength: [1, 'Minimo 1 producto'],
            }
        }]
})

const Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart