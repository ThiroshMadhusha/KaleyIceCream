// Create HTTP SERVER
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan"); // add server starting time
const bodyparser = require("body-parser");
const path = require("path");


const app = express();

dotenv.config({path:'config.env'})

const PORT = process.env.PORT || 5000

// log request
app.use(morgan('tiny'));

// parser request to body parser
app.use(bodyparser.urlencoded({ extended: true }))

// set view engine
app.set("view engine", "ejs");
// app.set("views",path.resolve(__dirname,"views/ejs"))

// load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
// path -->> css/style.css
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));

// load routers
app.use("/", require("./server/routes/router"));

app.listen(PORT, () => {
  console.log(`Server is Running On http://localhost:${PORT}`);
});