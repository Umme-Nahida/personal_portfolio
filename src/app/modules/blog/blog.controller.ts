import { NextFunction, Request, Response } from "express"
import { catchAsync } from "../../utils/catchAsync"
import { blogService } from "./blog.service";



 const createBlog = catchAsync(async(req:Request, res:Response,next:NextFunction)=>{
     const blog = req.body;

     const result = await blogService.createBlog(blog)
     res.status(201).send(result)
 })


export const blogController ={
    createBlog
}

