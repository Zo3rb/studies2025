import mongoose from "mongoose";
import { ENV } from "./env";

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(ENV.MONGO_URI);
    console.log("[DATABASE] Successfully connected to the Database.");
  } catch (error) {
    console.error("Failed to Connect to the Database: ", error);
    process.exit(1);
  }
};

export default connectDB;
