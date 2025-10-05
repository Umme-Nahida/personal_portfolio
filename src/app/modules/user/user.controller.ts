import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { userService } from "./user.service";


const createUser = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
   const user = req.body;
   console.log("user",req.body)

   const result = await userService.createUser(user)

   res.status(201).json({
      success: true,
      message: "User has been created successfully",
      data: result,
    })
})


const getUser = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{

   const result = await userService.getUser()

   res.status(201).json({
      success: true,
      message: "User has been retrieve successfully",
      data: result,
    })
})


const deleteUser = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
   const {id} = req.params;

   const result = await userService.deleteUser(Number(id))

   res.status(201).json({
      success: true,
      message: "User has been deleted successfully",
      data: null,
    })
})


const updateUser = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
   const {id} = req.params;
   const userInfo = req.body;

   const result = await userService.updateUser(Number(id),userInfo)

   res.status(201).json({
      success: true,
      message: "User has been updated successfully",
      data: result,
    })
})


const getAbout = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
   

   const result = await userService.getAbout()

   res.status(201).json({
      success: true,
      message: "about data has been updated successfully",
      data: result,
    })
})

const createAbout = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{

   

   const result = await userService.createAbout(req.body)

   res.status(201).json({
      success: true,
      message: "about data has been updated successfully",
      data: result,
    })
})

export const userController ={
   getUser,
   createAbout,
   getAbout,
   createUser,
   deleteUser,
   updateUser
}