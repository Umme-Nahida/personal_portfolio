// import { Prisma } from "../../../generated/prisma"

import { Post, Prisma } from "../../../generated/prisma"
import { prisma } from "../../config/db"


const createBlog = async (payload: Prisma.PostCreateInput):Promise<Post> => {
  // console.log("payload",payload)
  const blog = await prisma.post.create({
    data: payload
  })

  return blog

}


const getAllBlog = async()=>{

  const post = await prisma.post.findMany()
  return post
}

export const blogService = {
  createBlog,
  getAllBlog
}