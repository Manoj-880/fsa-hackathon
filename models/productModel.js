const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    brand:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    inStock:{
        type: Boolean,
        default: true
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("products", productSchema);