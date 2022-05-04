const axios = require("axios");
// routes render the index file
exports.homeRoutes = (req, res) => {

    // Make a get request to api/inventorys
    axios.get("http://localhost:3000/api/inventorys")
        .then(function (response) {
        //   console.log(response.data);
          res.render("index", { inventorys: response.data }); //me {inventorys:} eka index file ekata gannawa
        })
        .catch(err => {
        res.send(err)
    })
}

exports.add_inventory = (req, res) => {
    res.render("add_inventory");
}

exports.update_inventory = (req, res) => {
    axios.get("http://localhost:3000/api/inventorys", { params: { id: req.query.id } })
        .then(function (inventorydata) {
        res.render("update_inventory",{inventory:inventorydata.data})
        })
        .catch(err => {
            res.send(err);
    })

}

exports.view_inventory = (req, res) => {
  axios
    .get("http://localhost:3000/api/inventorys", {
      params: { id: req.query.id },
    })
    .then(function (inventorydata) {
      res.render("view_inventory", { inventory: inventorydata.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

// ------------------------------------------------------------

