import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { authService } from "./auth.service";
import { sendResponse } from "../../utils/sendResponse";
import { createUserTokens } from "../../utils/createToken";
import { IUserPayload } from "../../../types/type";
import { setAuthCookie } from "../../utils/setCokie";



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

export const authController = {
   login
}