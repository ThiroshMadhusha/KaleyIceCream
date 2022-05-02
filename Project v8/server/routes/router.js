const express = require('express');
//const { append } = require('express/lib/response');
const route = express.Router();

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 * @description Root Route
 * @method GET
 */
route.get('/',services.homeRoutes);

/**
 * @description add users
 * @method GET /add-user
 */
route.get('/add-user',services.add_user);

/**
 * @description update users
 * @method GET /update-user
 */
route.get('/update-user',services.update_user);

/**
 * @description user profile
 * @method GET /user-profile
 */
route.get('/user-profile',services.user_profile);


//API
route.post('/api/userss',controller.create);
route.get('/api/userss',controller.find);
route.put('/api/userss/:id',controller.update);
route.delete('/api/userss/:id',controller.delete);



module.exports = route;