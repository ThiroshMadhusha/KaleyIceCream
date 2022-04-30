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
  cus: {
    type: String,
    require: true,
  },

  status: {
    type: String,
    require: true,
  },
});

const Orderdb = mongoose.model("Orderdb", schema);

module.exports = Orderdb;
