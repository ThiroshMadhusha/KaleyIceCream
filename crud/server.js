const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');
const app = express();

const connectDB = require('./server/database/connection');

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080

app.use(morgan('tiny'));

connectDB();

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true}))

// set view engine
app.set("view engine", "ejs")

app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/image', express.static(path.resolve(__dirname, "assets/image")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))



app.use('/',require('./server/routes/router'))



app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});