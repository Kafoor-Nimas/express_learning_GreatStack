import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = 3000;
const MONGODB_URI =
  "mongodb+srv://Nimas:great123@cluster0.tw9kkxo.mongodb.net/express";

await mongoose.connect(MONGODB_URI).then(() => {
  console.log("Database Connected");
});

app.get("/", (req, res) => {
  res.send("Hello, express");
});

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
