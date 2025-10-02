import { error } from "console"
import { Prisma } from "../../../generated/prisma"
import { prisma } from "../../config/db"
import bcrypt from "bcryptjs"

const getUser = async()=>{

   const user = await prisma.user.findMany()

    return user
}


const createUser = async(payload:Prisma.UserCreateInput)=>{

    const {email, ...rest} = payload
    console.log("payloas",payload)
 
    const existingUser = await prisma.user.findUnique({where:{email:email}})


    // check is user already exists
    if(existingUser){
       throw error("user already exist")
    }

    // hash password
    const hashedPassword =await bcrypt.hash(payload.password,10)

     const user = await prisma.user.create({
      data: { ...rest, email, password: hashedPassword },
    });

    return user
}


const updateUser = async(id:number,userInfo:Prisma.UserUpdateInput)=>{

    const existingUser = await prisma.user.findUnique({where:{id}})
    console.log("userInfo", userInfo)

    // check is user already exists
    if(!existingUser){
       throw new Error("user not exist")
    }

    const user = await prisma.user.update({
        where:{id},
        data:userInfo
    })

    return user
}


const deleteUser = async(id:number)=>{

    const existingUser = await prisma.user.findUnique({where:{id}})


    // check is user already exists
    if(!existingUser){
       throw new Error("user not exist")
    }

    const user = await prisma.user.delete({
        where:{id}
    })

    return user
}





export const userService={
    getUser,
    createUser,
    deleteUser,
    updateUser
}