// import { Prisma } from "../../../generated/prisma"

import { title } from "process"
import { Post, Prisma } from "../../../generated/prisma"
import { prisma } from "../../config/db"


const createBlog = async (payload: Prisma.PostCreateInput):Promise<Post> => {
  // console.log("payload",payload)
  const blog = await prisma.post.create({
    data: payload
  })

  return blog

}

const singleBlog = async(id:number)=>{

  const post = await prisma.post.findUnique({where:{id}})
  return post
}

const getAllBlog = async(search:string, page:number, limit:number)=>{
   const skip = (page - 1) * limit;
  const post = await prisma.post.findMany({
    skip:skip,
    take: limit,
    where:{
      title:{contains:search, mode:"insensitive"}
    },
     include:{
        author:{
            select:{
                name:true,
                email:true,
                address:true,
                image:true,
                role:true
            }
        }
    }
  })

  const totalPost = await prisma.post.count()
  const totalPage = Math.ceil(totalPost / limit)
  console.log("totalPost,",totalPost)
  return {
    data:post,
    meta:{
      page: page,
      limit: limit,
      totalPage: totalPage,
      totalPost: totalPost
    }
  }
}

export const blogService = {
  createBlog,
  getAllBlog,
  singleBlog
}