const express = require("express");
const route = express.Router();

// render.js eken callback function
const services = require("../services/render");

// add controller routes
const controller = require("../controller/controller");
// add order controller routes
// const controller = require("../controller/ordercontroller");

// -----------------------------------------Inventory Form Paths--------------------------------------------

// Create View Index Path

/**
*@description Root Route
*@method GET/
*/
route.get("/", services.homeRoutes);

// ---------------Create Inventory path And API routes--------------------------------------------
// Create New Inventory Path
/**
*@description for create inventory
*@method GET/add-inventory
*/
route.get("/add-inventory", services.add_inventory);

// Update Inventory Path
/**
*@description for update inventory
*@method GET/update-inventory
*/
route.get("/update-inventory", services.update_inventory);

// API routes for Inventory 
route.post('/api/inventorys', controller.create);
route.get("/api/inventorys", controller.find);
route.put("/api/inventorys/:id", controller.update);
route.delete("/api/inventorys/:id", controller.delete);

// ---------------End Create Inventory path And API routes--------------------------------------------



module.exports = route


