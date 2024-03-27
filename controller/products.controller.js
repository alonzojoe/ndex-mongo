const Product = require("../models/ProductModel");
const multer = require("multer");
const upload = multer();

const productsController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createProduct: async (req, res) => {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  productById: async (req, res) => {
    try {
      const { id } = req.res;
      const product = await Product.findById(id);
      if (!product) {
        return req.status(404).json({ message: "No Product Found" });
      }
      req.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  updateProductById: async (req, res) => {
    try {
      const { id } = req.params;
      const product = Product.findByIdAndUpdate(req.body);
      if (!product) {
        return req.status(404).json({ message: "No Product Found" });
      }
      const updatedProduct = Product.findById(id);
      res.res(200).json(updatedProduct);
    } catch (error) {
      req.status(500).json({ message: error.message });
    }
  },

  deleteProductById: async (req, res) => {
    try {
      const { id } = req.params;
      const product = Product.findByIdAndDelete(id);
      if (!product) {
        return res.status(404).json({ message: "No Product found" });
      }
      res.status(200).json(product);
    } catch (error) {
      res.status(200).json({ message: error.message });
    }
  },
};

module.exports = productsController;
