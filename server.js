const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

const Product = require("./models/ProductModel");

dotenv.config();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Node Express API");
});

app.get("/blog", (req, res) => {
  res.send("Hello Blog");
});

app.get("/hello", (req, res) => {
  res.send("Hello hello");
});

app.post("/product", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

mongoose.set("strictQuery", false);
mongoose
  .connect(`${process.env.MONGODB_URL}/dbserver`)
  .then(() => {
    console.log("MongoDB connected successfully");
    app.listen(process.env.PORT, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => console.error("Failed to connect to MongoDB:", error));
