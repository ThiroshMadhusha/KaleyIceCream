// Create HTTP server Path

const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");


const connectDB = require("./server/database/connection");

const app = express();

dotenv.config({ path: 'config.env' })

const PORT = process.env.PORT || 8000

// log requests
app.use(morgan('tiny'));

// mongodb connection
connectDB();
// parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }));

// set view engine
app.set("view engine", "ejs");
// app.set("views",path.resolve(__dirname,"views/ejs"))


// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
// css/style.css
app.use('/images', express.static(path.resolve(__dirname, "assets/images")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));

// Load Router (router.js eke path okkoma methanata link karanawa)
app.use("/", require("./server/routes/router"));



app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});