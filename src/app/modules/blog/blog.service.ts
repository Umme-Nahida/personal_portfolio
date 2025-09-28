// import { Prisma } from "../../../generated/prisma"

import { Post, Prisma } from "../../../generated/prisma"
import { prisma } from "../../config/db"


const createBlog = async (payload: Prisma.PostCreateInput):Promise<Post> => {

  const blog = await prisma.post.create({
    data: payload
  })

  return blog

}


export const blogService = {
  createBlog
}