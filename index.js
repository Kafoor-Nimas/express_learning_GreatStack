import express from "express";
import { connectDB } from "./config/db.js";

const app = express();
const PORT = 3000;

await connectDB();

app.get("/", (req, res) => {
  res.send("Hello, express");
});

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
