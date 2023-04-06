const env = require('dotenv');
const express = require("express")

const app = express();
const mongoose = require('mongoose');
app.use(express.json());
env.config({path:"./config.env"})


const port = process.env.PORT || 8202;

require("./db/conn");
app.use(require("./router/auth"));
app.use (require("./model/UserSchema"));




app.get("/", (req,res)=>{
    res.send("home page");
})




app.listen(port, (req,res)=>{
    console.log(`listen to the port of ${port}`)
})