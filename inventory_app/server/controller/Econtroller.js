const req = require("express/lib/request");
const res = require("express/lib/response");
var Userdb = require("../model/model");

//create and save new user
exports.create = (req, res) => {
  //validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty..." });
    return;
  }

  //new user
  const user = new Userdb({
    name: req.body.name,
    email: req.body.email,
    number: req.body.number,
    designation: req.body.designation,
    salary: req.body.salary,
    gender: req.body.gender,
    status: req.body.status,
  });

  //save data
  user
    .save(user)
    .then((data) => {
      res.redirect("/");
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some errors...",
      });
    });
};

//retieve and return
exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;

    Userdb.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Not found user with id : " + id });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Error retrieving with id :" + id });
      });
  } else {
    Userdb.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res
          .status(500)
          .send({
            message: err.message || "Error Occured while retrieving...",
          });
      });
  }
};

//update a new user
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update can not empty..." });
  }
  const id = req.params.id;
  Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Cannot Update user with ${id}...` });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error Update user information..." });
    });
};

//delete a user
exports.delete = (req, res) => {
  const id = req.params.id;

  Userdb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Cannot Delete with in ${id}...` });
      } else {
        res.send({
          message: "User was deleted successfully...",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete user with id= " + id,
      });
    });
};
