const mongoose = require('mongoose');
const { Order } = require('.');
const OrderSchema = new mongoose.Schema({
    UserId: {
        type: String,
        required: true,
    },
    Products:[
        {
            productId: {
                type: String,
                required: true,
                },
            quntity: {
                type: String,
                required: true,
                },
        }            
    ],
    amount:{
        type: Number,
        required: true,
    },
    address: {
        type: Object,
        required: true,
    },
    status:{
        type: String,
        default:'pending'
    }, 
},
{ timestamps: true}
);
 module.exports = mongoose.model(Order, OrderSchema);