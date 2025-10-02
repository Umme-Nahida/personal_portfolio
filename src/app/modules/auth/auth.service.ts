import { Prisma } from "../../../generated/prisma"
import { prisma } from "../../config/db"
import bcrypt from "bcryptjs"
import { generateToken } from "../../utils/jwt"
import { envVars } from "../../config/env"


const login = async(payload:Prisma.UserCreateInput)=>{
    
    const isExistsUser = await prisma.user.findUnique({where:{email:payload?.email}})

    // check is user is exists
    if(!isExistsUser){
        throw new Error("Invalid Credentials")
    }

    // check password 
    const isMatch = await bcrypt.compare(payload.password, isExistsUser.password)

    if(!isMatch){
        throw new Error("Invalid Credentials password does'nt exists")
    }
    

    // jwt sign
    const JwtPayload = {
        id: isExistsUser.id,
        email: isExistsUser.email,
        role: isExistsUser.role
    }

    const accessToken = generateToken(JwtPayload,envVars.JWT_SECRET,envVars.JWT_EXPIRES_IN)    
    const refreshToken = generateToken(JwtPayload,envVars.JWT_REFRESH_SECRET,envVars.JWT_REFRESH_EXPIRES_IN)
    
    const {password, ...rest} = isExistsUser;

    return {
        accessToken,
        refreshToken,
        ...rest
    }
}


export const authService = {
    login
}