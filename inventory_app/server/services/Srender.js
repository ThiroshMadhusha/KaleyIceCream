const axios = require("axios");


exports.homeRoutesSales = (req, res) => {
  axios
    .get("http://localhost:3000/api/sales")
    .then(function (response) {
      res.render("home", { sales: response.data });
    })

    .catch((err) => {
      res.send(err);
    });
};

exports.add_sales = (req, res) => {
  res.render("add_sales");
};

exports.update_sales = (req, res) => {
  axios
    .get("http://localhost:3000/api/sales", { params: { id: req.query.id } })
    .then(function (salesdata) {
      res.render("update_sales", { sales: salesdata.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.view_sales = (req, res) => {
  axios
    .get("http://localhost:3000/api/sales", { params: { id: req.query.id } })
    .then(function (salesdata) {
      res.render("view_sales", { sales: salesdata.data });
    })
    .catch((err) => {
      res.send(err);
    });
};