const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require("path");


const connectDB=require('./server/database/connection');

const app = express();

dotenv.config({path:'config.env'});
const PORT = process.env.PORT || 8000

//log request
app.use(morgan('tiny'));

    //mongod connection
    connectDB();

//parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

//set view engine
app.set("view engine", "ejs")
//app.set("views", path.resolve(__dirname,"views/ejs"))

//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")));
app.use('/images',express.static(path.join(__dirname,"assets/images")));
app.use('/js',express.static(path.resolve(__dirname,"assets/js")));


/*
app.get('/',(req,res)=>{
    res.render('index',{users:"New Data"});
})

app.get('/add-user',(req,res)=>{
    res.render('add_user');
})

app.get('/update-user',(req,res)=>{
    res.render('update_user');
})
*/

//load routers
app.use('/',require('./server/routes/router'));


app.listen(PORT,()=>{console.log(`Server is running on http://localhost:${PORT}`)

});




