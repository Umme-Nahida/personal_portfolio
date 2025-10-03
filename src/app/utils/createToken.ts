
import { IUserPayload } from "../../types/type"
import { envVars } from "../config/env"
import { generateToken } from "./jwt"



export const createUserTokens = (user: Partial<IUserPayload> ) => {
    const jwtPayload = {
        userId: user?.id,
        email: user?.email,
        role: user?.role
    }
    const accessToken = generateToken(jwtPayload, envVars.JWT_SECRET, envVars.JWT_EXPIRES_IN)

    const refreshToken = generateToken(jwtPayload, envVars.JWT_REFRESH_SECRET, envVars.JWT_REFRESH_EXPIRES_IN)


    return {
        accessToken,
        refreshToken
    }
}