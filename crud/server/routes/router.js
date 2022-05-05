const express = require('express');
const route = express.Router()

const services =require('../services/render');

const controller = require('../controller/controller');

route.get('/',services.homeRoutes);

route.get('/add-sales',services.add_sales)

route.get('/update-sales',services.update_sales)


route.post('/api/sales',controller.create);
route.get('/api/sales',controller.find);
route.put('/api/sales/:id',controller.update);
route.delete('/api/sales/:id',controller.delete);








module.exports=route