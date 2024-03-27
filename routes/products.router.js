const express = require("express");
const router = express.Router();

const productsController = require("../controller/products.controller");

router.get("/", productsController.getAllProducts);

router.get("/:id", productsController.productById);

router.post("/", productsController.createProduct);

router.put("/:id", productsController.updateProductById);

router.delete("/:id", productsController.deleteProductById);

module.exports = router;
