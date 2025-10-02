import { NextFunction, Request, Response } from "express";



type tryCatchType = (req: Request, res: Response, next: NextFunction) => Promise<void>


export const catchAsync = (fn: tryCatchType) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((error) => {
        if (process.env.node_env === "development") {
            res.status(400).json({
                success: false,
                message: error.message || "Something went wrong",
            });
        }
    })
}