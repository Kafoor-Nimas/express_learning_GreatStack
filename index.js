import express from "express";

const app = express();
const PORT = 3000;
app.use(express.json());

process.on("uncaughtException", (err) => {
  console.log(err);
  process.exit(1);
});
process.on("unhandledRejection", (reason, promise) => {
  console.log(reason);
});

app.get("/", (req, res) => {
  res.send("Hello, express");
});
// Synchronous Error
app.get("/sync-error", (req, res, next) => {
  try {
    throw new Error("Something went wrong!");
  } catch (error) {
    next(error);
  }
});
//Asynchronous Error
app.get("/async-error", async (req, res, next) => {
  try {
    await Promise.reject(new Error("Async error occured"));
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  console.error(err.message);
  console.log(err.stack);
  res.status(500).json({ message: err.message });
});

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
