require('dotenv').config() 
// console.log(process.env.JWT_SECRET) // remove this after you've confirmed it is working

const express = require('express');
const app = express();
const router = require("./routes/index");
const PORT = 3000;
const errorHandler = require("./middlewares/errorHandler");

// app.use(cors());

//middleware: body-parser
app.use(express.urlencoded({extended: true })); //so that we can receive data from html form OR 'x-www-form-urlencoded'
app.use(express.json());

//to make end point/router
app.use(router);
//global middleware.Any router will go here if next() is executed
// app.use(errorHandler.handle);


//app listener
app.listen(PORT, () => {
    console.log(`Server can be access in http://localhost:${PORT}`);
})