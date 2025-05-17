require("dotenv").config();
const express = require("express");
const db = require("./db");

const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
  res.send("API is working!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
