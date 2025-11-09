import mongoose from "mongoose";

export const connectDB = async () => {
  const MONGODB_URI =
    "mongodb+srv://Nimas:great123@cluster0.tw9kkxo.mongodb.net/express";

  await mongoose.connect(MONGODB_URI).then(() => {
    console.log("Database Connected");
  });
};
