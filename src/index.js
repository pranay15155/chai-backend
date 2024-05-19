// require ('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import {app} from './app.js'
dotenv.config({
    path:'./env'
})




connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at port :${process.env.port}`);
    })
})
.catch((err)=>{
    console.log("MONGO DB connection failed");
})






/*
 import mongoose from "mongoose";
 import { DB_NAME } from "./constants";
database me try/catch  async/await ka dhyan rakho
import express from "express"
const app=express()

(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{  //listeners for express app
            console.log("ERROR: ",error);
            throw err
        })
        app.listen(processe.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    }
    catch(error){
        console.log("ERROR: ",error);
        throw err
    }
})()

*/
