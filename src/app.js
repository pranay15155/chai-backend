import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app=express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}
))

//accepting json response for ex from from
app.use(express.json({limit:"16kb"}))

//for url encoding and decoding because url has a proper syntax
app.use(express.urlencoded({extended:true,limit:"16kb"}));

//to store file and folders and access it
app.use(express.static("public"));

//to access and set cookies and to keep cookies secure
app.use(cookieParser())

//checking in the between is called middleware 
//for ex if we hit a url on instagram middleware checks if we are logged in or not ,,,
//check if user is admin
//before sending us the response

//(err,request,response,next) next is flag which indicates middleware




//routes import 
import userRouter from './routes/user.routes.js'

//routes declaration
//whenever /users is added in url userRouter gets activated
//v1 is version 1 of api
app.use("/api/v1/users",userRouter)

// http://localhost:8000/api/v1/users/register

export {app}