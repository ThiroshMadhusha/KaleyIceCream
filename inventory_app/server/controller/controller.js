var Inventorydb = require('../model/model');

// Create and savenew inventory
exports.create = (req, res) => {
    // validate requests
    if (!req.body) {
        res.status(400).send({ message: "Content Can Not Be Empty..!" });
        return;
    }
    // create new inventory
    const inventory = new Inventorydb({
      name: req.body.name,
      category: req.body.category,
      flavour: req.body.flavour,
      qty: req.body.qty,
      temp: req.body.temp,
      status: req.body.status,
    });
    // save inventory in the database
    inventory
        .save(inventory)
        .then(data => {
            // res.send(data)
            res.redirect('/add-inventory');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some Error Occurred While Creating a Create Operation"
            });
        });
}

// retrive and return all users/ retrive and return a single user
exports.find = (req, res) => {

    if (req.query.id) {
        const id = req.query.id;
        Inventorydb.findById(id)
            .then(data => {
                if (!data) {
                    res.status(400).send({
                    message:"Not Found User With Id "+id
                })
                } else {
                    res.send(data)
            }
            })
            .catch(err => {
                res.status(500).send({
                message:"Error Retrieving Inventory With Id"+id
            })
        })
        
    } else {
        Inventorydb.find()
          .then((inventory) => {
            res.send(inventory);
          })
          .catch((err) => {
            res.status(500).send({
              message:
                err.message ||
                "Error Occurred While Retriving Inventory Information",
            });
          });        
    }   
}

// Update a new identify inventory bt inventory id
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400)
        .send({message:"Data Is Update Cannot Be Empty"})
    }
    const id = req.params.id;
    Inventorydb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({message:`Cannot Update User With ${id}.May be Inventory Not Found..!`})
            } else {
                res.send(data)
        }
        })
        .catch(err => {
        res.status(500).send({message:"Error Update Inventory Items"})
    })
    
}

// Delete a inventory with specify inventory id
exports.delete = (req, res) => {
    const id = req.params.id;
    Inventorydb.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot Delete With Id ${id}.May be Id Is Wrong` })
            } else {
                res.send({
                    message: "Inventory Was Deleted Successfully..!"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could Not Delete Inventory With ID = " + id
            });
        });
    
}