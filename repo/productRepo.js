const productModel = require('../models/productModel');

const getAllProducts = () => {
    return productModel.find({},{__v: 0});
};

const createProduct = (data) => {
    const product = new productModel(data);
    return product.save();
};

const updateProduct = (data, id) => {
    return productModel.findOneAndUpdate({_id: id}, {$set: data});
}

const deleteProduct = (id) => {
    return productModel.findOneAndDelete({_id: id});
}

module.exports = {getAllProducts, createProduct, updateProduct, deleteProduct};