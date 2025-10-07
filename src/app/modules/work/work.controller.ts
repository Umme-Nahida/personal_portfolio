import { NextFunction, Request, Response } from "express"
import { catchAsync } from "../../utils/catchAsync"
import { workService } from "./work.service"


// -----------create-Project
const createProject = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const result = await workService.createProject(req.body)

    res.status(201).json({
        success: true,
        message: "create Project data retrieve successfully",
        data: result,
    })
})


const getWorks = catchAsync(async (req: Request, res: Response, next: NextFunction) => {


    const result = await workService.getWorks()

    res.status(201).json({
        success: true,
        message: "Works Data retrieve successfully",
        data: result,
    })
})


// updated work
 const updateWork = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const {id} = req.params;
    const userInfo = req.body;
 
    const result = await workService.updateWork(Number(id),userInfo)
 
    res.status(201).json({
       success: true,
       message: "work has been updated successfully",
       data: result,
     })
 })

 const deleteWork = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
     const {id} = req.params;
  
     const result = await workService.deleteWork(Number(id))
  
     res.status(201).json({
        success: true,
        message: "work has been deleted successfully",
        data: null,
      })
  })
 

export const workController = {
    createProject,
    getWorks,
    updateWork,
    deleteWork
}