require('dotenv').config();
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require("express");

const app = express();


dotenv.config({path:'./config.env'});
require('./db/conn');
//const User = require('./model/MuftGptSchema');

//we link router files to make route easy

// Middleware to parse request body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require('./router/auth'));
//const DB = process.env.DATABASE;
const PORT = process.env.PORT;

// mongoose.connect(DB).then(() => {
//     console.log('connection successful!');
// }).catch((err) => console.log('connection failed', err));

//Middleware
//const middleware = (req,res,next)=>{
//    console.log("Hello my middleware");
//}
//middleware();

// app.get("/", (req, res) => {
//     res.send("Hello!");
// });

app.get("/Signup", (req, res) => {
    res.send("Hello to Signup!");
});
  
app.get("/Signin",(req, res) => {
    res.send("Hello to SignIn!");
});

// app.get("/Chat",(req, res) => {
//     res.send("Hello from Chatpage!");
// });




app.listen(PORT, () => {
    console.log(`Console is running at port 5500`);
})