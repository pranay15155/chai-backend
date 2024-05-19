import { response } from "express";
import { asyncHandler } from "../utils/asyncHandler.js";


//method is used to register user 
const registerUser =asyncHandler(async(req,res)=>{
    res.status(200).json({
        message:"pranay prasoon"
    })
})

export {registerUser,}