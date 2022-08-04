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
            }
        }],
        status: {
            type: String,
            default: 'pending',
            enum: [
                'pending', 'completed'
            ]
        }
})

const Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart