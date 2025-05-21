import mongoose from "mongoose";

let isConnected = false;

export const dbConnect = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("MONGODB_URI is not defined in .env.local");
  }

  if (isConnected) return;

  try {
    await mongoose.connect(uri); // simplified, no deprecated options
    isConnected = true;
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    throw err;
  }
};
