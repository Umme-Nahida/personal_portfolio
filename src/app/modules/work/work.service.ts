import { Prisma } from "@prisma/client"
import { prisma } from "../../config/db"


const createProject = async(data:Prisma.WorksCreateInput)=>{

   const user = await prisma.works.create({
    data: data
   })

    return user
}

const getWorks = async()=>{

   const user = await prisma.works.findMany()

    return user
}


// updated project 
const updateWork = async(id:number,blogInfo:Prisma.WorksUpdateInput)=>{

  const work = await prisma.works.update({where:{id}, data:blogInfo})
  return work
}

const deleteWork = async(id:number)=>{

  const work = await prisma.works.delete({where:{id}})
  return work
}


export const workService = {
    createProject,
    getWorks,
    updateWork,
    deleteWork
}