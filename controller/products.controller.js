const Product = require("../models/ProductModel");
const asyncHandler = require("express-async-handler");
const multer = require("multer");
const upload = multer();

const productsController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(500);
      throw new Error(error.message);
    }
  },

  createProduct: async (req, res) => {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(500);
      throw new Error(error.message);
    }
  },

  productById: asyncHandler(async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findById(id);
      if (!product) {
        return res.status(404).json({ message: "No Product Found" });
      }
      res.status(200).json(product);
    } catch (error) {
      res.status(500);
      throw new Error(error.message);
    }
  }),

  updateProductById: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findByIdAndUpdate(id, req.body);
      if (!product) {
        return res.status(404).json({ message: "No Product Found" });
      }
      const updatedProduct = await Product.findById(id);
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(500);
      throw new Error(error.message);
    }
    //using multer for form multipar
    // try {
    //   const { id } = req.params;
    //   upload.any()(req, res, async (err) => {
    //     if (err) {
    //       return res.status(400).json({ message: "Invalid request" });
    //     }
    //     const product = await Product.findByIdAndUpdate(id, req.body);
    //     if (!product) {
    //       return res.status(404).json({ message: "No Product Found" });
    //     }
    //     const updatedProduct = await Product.findById(id);
    //     res.status(200).json(updatedProduct);
    //   });
    // } catch (error) {
    //   res.status(500).json({ message: error.message });
    // }
  },

  deleteProductById: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findByIdAndDelete(id);
      if (!product) {
        return res.status(404).json({ message: "No Product found" });
      }
      res.status(200).json(product);
    } catch (error) {
      res.status(500);
      throw new Error(error.message);
    }
  },
};

module.exports = productsController;
