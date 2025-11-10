import express from "express";

const app = express();
const PORT = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, express");
});
// Get all products
app.get("/api/products", (req, res) => {
  const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Mobile", price: 500 },
  ];
  res.status(200).json({ products });
});
// Get a single product
app.get("/api/products/:id", (req, res) => {
  const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Mobile", price: 500 },
  ];

  const product = products.find((p) => p.id === Number(req.params.id));

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.status(200).json(product);
});

//Create a new product

app.post("/api/products", (req, res) => {
  const newProduct = req.body;
  newProduct.id = Date.now();
  res.status(201).json(newProduct);
});

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
