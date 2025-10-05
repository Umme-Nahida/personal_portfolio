import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { authService } from "./auth.service";
import { sendResponse } from "../../utils/sendResponse";
import { createUserTokens } from "../../utils/createToken";
import { IUserPayload } from "../../../types/type";
import { setAuthCookie } from "../../utils/setCokie";
import httpStatus from "http-status-codes"



const login = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
   const userInfo = req.body;

   const user = await authService.login(userInfo)

   const userToken = createUserTokens(user as IUserPayload)
   setAuthCookie(res, userToken)


   sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "User login successfully",
      data: {
         accessToken: userToken.accessToken,
         refreshToken: userToken.refreshToken,
         user: user
      }
   })
})

const deleteUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
   const {id} = req.params;

   const user = await authService.deleteUser(Number(id))

   sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "User deleted successfully",
      data: {
         user: user
      }
   })
})


const logout = catchAsync(async(req:Request,res:Response, next:NextFunction)=>{
        
        res.clearCookie("token",{
            httpOnly:true,
            secure:false,
            sameSite:"lax"
        })

        res.clearCookie("refreshToken",{
            httpOnly:true,
            secure:false,
            sameSite:"lax"
        })
        sendResponse(res,{
            success: true,
            statusCode: httpStatus.CREATED,
            message: "user logout successfully",
            data: {}
        })
})

export const authController = {
   login,
   logout,
   deleteUser
}