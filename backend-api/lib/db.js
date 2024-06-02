import mongoose from "mongoose";
//import dotenv from "dotenv";

//dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://newuser200:i0515loavKWZW4wp@cluster0.mhmlzm8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("MongoDB Connected...");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;
