import { NextFunction, Request, Response } from "express"
import { catchAsync } from "../../utils/catchAsync"
import { blogService } from "./blog.service";
import { sendResponse } from "../../utils/sendResponse";

 const createBlog = catchAsync(async(req:Request, res:Response,next:NextFunction)=>{
     const blog = req.body;

     const result = await blogService.createBlog(blog)
     res.status(201).send(result)
 })

 const getAllBlog = catchAsync(async(req:Request, res:Response,next:NextFunction)=>{

     const result = await blogService.getAllBlog()
     sendResponse(res, {
        statusCode:201,
        success:true,
        message:"all user retrieve successfully",
        data: result
     })
 })


 const singleBlog = catchAsync(async(req:Request, res:Response,next:NextFunction)=>{
     
    const {id} = req.params;
     const result = await blogService.singleBlog(Number(id))
     sendResponse(res, {
        statusCode:201,
        success:true,
        message:"Single user retrieve successfully",
        data: result
     })
 })


export const blogController ={
    createBlog,
    getAllBlog,
    singleBlog
}