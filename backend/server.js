const express = require("express");
const cors=require("cors");
const mongoose= require("mongoose");
require("dotenv").config();
const app=express();
const port=5000;
app.use(cors());
app.use(express.json());
const uri=process.env.URI;
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true});
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("mongoDB connected");
})

const exercisesRouter=require('./routes/exercises');
const usersRouter=require('./routes/users');
app.use('/exercises',exercisesRouter);
app.use('/users',usersRouter);
app.listen(port,()=>{
    console.log(`Server is running on port:${port}`);
});


