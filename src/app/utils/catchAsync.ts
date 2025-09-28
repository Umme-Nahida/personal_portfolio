import { NextFunction, Request, Response } from "express";



type tryCatchType = (req:Request, res:Response, next: NextFunction)=> Promise<void>


export const catchAsync = async(fn:tryCatchType)=>(req: Request, res: Response, next: NextFunction) => {
   Promise.resolve(fn(req,res,next)).catch((err)=>{
        if(process.env.node_env === "development"){
            console.log(err)
        }
   })
}