const express = require("express");
const route = express.Router();

app.get("/", (req, res) => {
  res.render("index");
});

// Add inventory form render path
app.get("/add-inventory", (req, res) => {
  res.render("add_inventory");
});

// Update inventory form render path
app.get("/update-inventory", (req, res) => {
  res.render("update_inventory");
});
