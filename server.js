const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database/database");
const productsRouter = require("./routes/products.router");
const formMiddleware = require("./middleware/formMiddleware");
const errorMiddleWare = require("./middleware/errorMiddleware");

const app = express();
app.use(formMiddleware);

dotenv.config();

app.get("/", () => {
  throw new Error("fake error test errorMiddleware");
});
app.use("/api/v1/products", productsRouter);
app.use(errorMiddleWare);
connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
