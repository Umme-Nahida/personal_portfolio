import { NextFunction, Request, Response } from "express";
import { verifyToken } from "./jwt";
import { JwtPayload } from "jsonwebtoken";
import AppError from "../errorHandler/appErrors";
import { envVars } from "../config/env";

interface IVerifyUser{
    id:string,
    email:string
}

export const checkAuth = (...restRoles: string[]) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        // console.log("...restRoles",...restRoles)
        const accessToken = req?.cookies?.accessToken || req?.cookies?.refreshToken || req.headers.authorization;
        // console.log("accessToken",accessToken)
        if (!accessToken) throw new AppError(403, "token isn't available");
        
        const tokenVarify = verifyToken(accessToken, envVars.JWT_SECRET) as JwtPayload

        if (!restRoles.includes(tokenVarify.role)) {
            throw new AppError(403, "you are not allowed to access this route")
        }
        (req as any).verifyUser = tokenVarify as IVerifyUser;
        next()
    } catch (err) {
        next(err)
    }

}