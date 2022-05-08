const mongoose = require("mongoose");

var schema = new mongoose.Schema({
  invoiceno: {
    type: Number,
    required: true,
    unique: true,
  },
  productcatagory: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  buyername: {
    type: String,
    required: true,
  },
  buyercontact: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  rateperonequantity: {
    type: Number,
    required: true,
  },
});

const Salesdb = mongoose.model("Salesdb", schema);

module.exports = Salesdb;
