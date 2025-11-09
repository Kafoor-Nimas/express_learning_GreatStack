import cookieParser from "cookie-parser";
import express from "express";
import session from "express-session";

const app = express();
const PORT = 3000;
app.use(cookieParser());
app.use(
  session({
    secret: "sample-secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.get("/", (req, res) => {
  res.send("Hello, express");
});
app.get("/visit", (req, res) => {
  if (req.session.page_views) {
    req.session.page_views++;
    res.send(`You visited this page ${req.session.page_views} times`);
  } else {
    req.session.page_views = 1;
    res.send("Welcome to this page for the first time!");
  }
});

app.get("/remove-visit", (req, res) => {
  req.session.destroy();
  res.send("Session Removed");
});

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
