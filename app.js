const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

console.log("MONGO_URI: ", MONGO_URI);

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("MongoDB connected successfully");
});

db.on("error", (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

app.use(express.json());

const userRoutes = require("./routes/user.routes");
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to my Node.js app!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
