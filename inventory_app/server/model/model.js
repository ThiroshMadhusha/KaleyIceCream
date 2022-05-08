// Create Inventory Model Class
const mongoose = require("mongoose");

var schema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true,
  },
  category: {
    type: String,
    require: true,
  },
  flavour: {
    type: String,
    require: true,
  },
  qty: {
    type: String,
    require: true,
  },
  temp: {
    type: String,
    require: true,
  },
 
  status: {
    type: String,
    require: true,
  },
});


const Inventorydb = mongoose.model("inventorydb", schema);

module.exports = Inventorydb;