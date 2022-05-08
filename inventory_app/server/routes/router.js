const express = require("express");
const route = express.Router();

// render.js eken callback function
const services = require("../services/render");

const salesservices = require("../services/Srender");

const employeeservices = require("../services/Erender");

// add controller routes
const controller = require("../controller/controller");

const salescontroller = require("../controller/Scontroller");

const employeecontroller = require("../controller/Econtroller");


// -----------------------------------------Inventory Form Paths--------------------------------------------

// Create View Index Path

/**
 *@description Root Route
 *@method GET/home
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

route.get("/view-inventory", services.view_inventory);

// API routes for Inventory
route.post("/api/inventorys", controller.create);
route.get("/api/inventorys", controller.find);
route.put("/api/inventorys/:id", controller.update);
route.delete("/api/inventorys/:id", controller.delete);





// ---------------Sales Management----------------------------

route.get("/sales", salesservices.homeRoutesSales);

route.get("/add-sales", salesservices.add_sales);

route.get("/update-sales", salesservices.update_sales);

route.get("/view-sales", salesservices.view_sales);

route.post("/api/sales", salescontroller.create);
route.get("/api/sales", salescontroller.find);
route.put("/api/sales/:id", salescontroller.update);
route.delete("/api/sales/:id", salescontroller.delete);



// -----------------------------Employee Management-------------------------


/**
 * @description Root Route
 * @method GET
 */
route.get("/", employeeservices.homeRoutesEmployee);

/**
 * @description add users
 * @method GET /add-user
 */
route.get("/add-user", employeeservices.add_user);

/**
 * @description update users
 * @method GET /update-user
 */
route.get("/update-user", employeeservices.update_user);

/**
 * @description user profile
 * @method GET /user-profile
 */
route.get("/user-profile", employeeservices.user_profile);


//API
route.post("/api/userss", employeecontroller.create);
route.get("/api/userss", employeecontroller.find);
route.put("/api/userss/:id", employeecontroller.update);
route.delete("/api/userss/:id", employeecontroller.delete);


module.exports = route;
