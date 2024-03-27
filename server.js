const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database/database");
const multer = require("multer");
const upload = multer();
const app = express();

const Product = require("./models/ProductModel");

dotenv.config();
app.use(express.json()); //middleware to accept json requests
app.use(express.urlencoded({ extended: false })); //middleware to accept urlEncoded data

app.get("/", (req, res) => {
  res.send("Hello Node Express API");
});

app.get("/blog", (req, res) => {
  res.send("Hello Blog");
});

app.get("/hello", (req, res) => {
  res.send("Hello hello");
});

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.put("/products/:id", upload.any(), async (req, res) => {
  const formData = req.body;
  console.log(formData);
  // return formData;
  // res.status(200).json({ data: formData });
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, formData);
    if (!product) {
      return res.status(404).json({ message: "Product Not Found" });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res
        .status(404)
        .json({ message: `Product Not Found with and id of ${id}` });
    }
    res.status(200).json(product);
  } catch (error) {
    req.status(500).json({ message: error.message });
  }
});

connectDB();

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
