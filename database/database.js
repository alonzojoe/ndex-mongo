const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_ONLINE_URL}`);
    console.log("MongoDB connected successfully");
    mongoose.set("strictQuery", false);
  } catch (error) {
    console.log("Failed to connect to MongoDB: ", error);
  }
};

module.exports = connectDB;
