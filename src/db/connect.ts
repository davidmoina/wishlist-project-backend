import mongoose from "mongoose";
import config from "../config/config";

function connectDB() {
  return mongoose.connect(config.db.uri)
  
}

export default connectDB