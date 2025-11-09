import cookieParser from "cookie-parser";
import express from "express";

const app = express();
const PORT = 3000;
app.use(cookieParser());

app.get("/", (req, res) => {
  res.cookie("name", "express-app", { maxAge: 360000 });
  res.send("Hello, express");
});
app.get("/fetch", (req, res) => {
  console.log(req.cookies);
  res.send("API Called");
});
app.get("/remove-cookie", (req, res) => {
  res.clearCookie("name");
  res.send("Cookie cleared");
});

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
