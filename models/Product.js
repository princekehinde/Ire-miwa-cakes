const mongoose = require('mongoose');
const ProductSchema = new Product({
    title:{
        type: String,
        required: true,
    }, 
    desc:{
        type: String,
        required: true,
    }, 
    img:{
        type: String,
        required: true,
    }, 
    categories:{
        type: Array,
    },
    size: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
},

    {timestamps : true}
);

module.exports = mongoose.model('Product', ProductSchema);