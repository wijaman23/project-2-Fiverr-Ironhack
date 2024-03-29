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
        },
        date: {
            type: String,
        },
})

cartSchema.pre('save', function(next) {
    const today = new Date()
    this.date = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0') 
    next()
})



const Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart