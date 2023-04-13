import mongoose from "mongoose";
// import config from "../config/config";

function connectDB() {
  return mongoose.connect("mongodb://127.0.0.1:27017/wishlist")
}

export default connectDB