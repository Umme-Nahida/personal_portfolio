
import { Prisma } from "@prisma/client"
import { prisma } from "../../config/db"
import bcrypt from "bcryptjs"

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
    

    const {password, ...rest} = isExistsUser;

    return {
        ...rest
    }
}


const deleteUser = async(id:number)=>{
    
    const isExistsUser = await prisma.user.findUnique({where:{id}})

    // check is user is exists
    if(!isExistsUser){
        throw new Error("Invalid Credentials")
    }

    // delete user 
    const user = await prisma.user.delete({where:{
        id: id
    }})

    return user;
}


export const authService = {
    login,
    deleteUser
}