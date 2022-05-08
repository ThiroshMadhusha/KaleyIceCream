var Salesdb = require("../model/salesmodel");

//Create new sale record
exports.create = (req, res) => {

    // validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be emtpy!" });
        return;
    }

    // new sales recode
    const sales = new Salesdb({
        invoiceno: req.body.invoiceno,
        email: req.body.email,
        productcatagory: req.body.productcatagory,
        date: req.body.date,
        buyername: req.body.buyername,
        buyercontact: req.body.buyercontact,
        quantity: req.body.quantity,
        rateperonequantity: req.body.rateperonequantity,

    })

    // save user in the database
    sales
        .save(sales)
        .then(data => {
           // res.send(data)
            res.redirect('/sales');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating a create operation"
            });
        });

}


exports.find = (req, res) => {

    if (req.query.id) {
        const id = req.query.id;

        Salesdb.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: "Not found sales record with id " + id })
                } else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({ message: "Erro retrieving sales record with id " + id })
            })

    } else {

        Salesdb.find()
            .then(sales => {
                res.send(sales)
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating a create operation"
                });
            });
    }

}

    //update record

    exports.update = (req, res) => {
        if (!req.body) {
            return res
                .status(400)
                .send({ message: "Data to update can not be empty" })
        }

        const id = req.params.id;
        Salesdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: `Cannot Update sales with ${id}. Maybe record not found!` })
                } else {
                    res.send(data)
                  
                }
            })
            .catch(err => {
                res.status(500).send({ message: "Error Update sales record" })
            })
    }



exports.delete = (req, res) => {
    const id = req.params.id;

    Salesdb.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot Delete with id ${id}. Maybe id is wrong` })
            } else {
                res.send({
                    message: "Sales record was deleted successfully!"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete sales record with id=" + id
            });
        });
};