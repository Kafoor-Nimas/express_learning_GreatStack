import express from "express";
import { connectDB } from "./config/db.js";
import { Person } from "./models/person.js";

const app = express();
const PORT = 3000;

await connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, express");
});

//saving data in MongoDB
app.post("/person", async (req, res) => {
  try {
    const { email, name, age } = req.body;
    const newPerson = new Person({
      name,
      age,
      email,
    });
    await newPerson.save();
    console.log(newPerson);
    res.send("Person added");
  } catch (error) {
    res.send(error.message);
  }
});

//Updating data in MongoDB
app.put("/person", async (req, res) => {
  const { id } = req.body;

  const personData = await Person.findByIdAndUpdate(id, { age: "28" });
  await personData.save();
  console.log(personData);
  res.send("Person Updated");
});

//Detele data in MongoDB
app.delete("/person/:id", async (req, res) => {
  const { id } = req.params;
  await Person.findByIdAndDelete(id);
  res.send("User Deleted");
});

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
