const productRepo = require('../repo/productRepo');

const getProducts = async (req, res) => {
    try {
        const products = await productRepo.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).send("internal server error");
        console.log(error);
    }
};


const addProduct = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        await productRepo.createProduct(data);
        res.status(200).send("Product added successfully");
    } catch (error) {
        res.status(500).send("internal server error");
        console.log(error);
    }
}

const updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        await productRepo.updateProduct(data, id);
        res.status(200).send('product updated successfully');
    } catch (error) {
        res.status(500).send('Internal server error');
    }
}

const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        await productRepo.deleteProduct(id);
        res.status(200).send("Product deleted successfully");
    } catch (error) {
        res.status(500).send("internal server error");
    }
}

module.exports = {getProducts, addProduct, updateProduct, deleteProduct};