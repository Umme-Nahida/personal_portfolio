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
     const {search} = req.query || "";
     const page = Number(req.query.page) || 1;
     const limit = Number(req.query.limit) || 5;

     const result = await blogService.getAllBlog(search as string, page,limit)

     sendResponse(res, {
        statusCode:201,
        success:true,
        message:"all user retrieve successfully",
        data: result,
       
     })
 })


 const deletePost = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const {id} = req.params;
 
    const result = await blogService.deleteBlog(Number(id))
 
    res.status(201).json({
       success: true,
       message: "Post has been deleted successfully",
       data: null,
     })
 })
 
 
 const updatePost = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const {id} = req.params;
    const userInfo = req.body;
 
    const result = await blogService.updateBlog(Number(id),userInfo)
 
    res.status(201).json({
       success: true,
       message: "Post has been updated successfully",
       data: result,
     })
 })
 


 const singleBlog = catchAsync(async(req:Request, res:Response,next:NextFunction)=>{
     
    const {id} = req.params;
     const post = await blogService.singleBlog(Number(id))

     sendResponse(res, {
        statusCode:201,
        success:true,
        message:"Single user retrieve successfully",
        data: post
     })
 })


export const blogController ={
    createBlog,
    getAllBlog,
    singleBlog,
    updatePost,
    deletePost
}