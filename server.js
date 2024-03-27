const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database/database");
const productsRouter = require("./routes/products.router");
const formMiddleware = require("./middleware/formMiddleware");

const app = express();

dotenv.config();
app.use(formMiddleware);

app.use("/api/v1/products", productsRouter);

connectDB();

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});