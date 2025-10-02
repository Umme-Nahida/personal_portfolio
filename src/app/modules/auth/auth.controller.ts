import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { authService } from "./auth.service";



const login = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
   const user = req.body;

   const result = await authService.login(user)

   res.status(201).json(result)
})

export const authController ={
   login
}