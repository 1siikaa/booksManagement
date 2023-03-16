const express = require("express")
const mongoose = require("mongoose")
const route = require('../route/route');
const app = express()


const multer= require("multer");
app.use(cors())
app.use( multer().any())
app.use(express.json())


mongoose.connect("mongodb+srv://Vashika:Vanshikaa08@cluster0.on6mcgr.mongodb.net/test")
.then(() => console.log("MongoDB is connected"))
.catch((error) => console.log(error))

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'https://main--adorable-croissant-6c39f3.netlify.app/');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); 
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
    });

app.use('/', route);


app.listen(3000, function () {
console.log('Express app running on port ' + 3000)})