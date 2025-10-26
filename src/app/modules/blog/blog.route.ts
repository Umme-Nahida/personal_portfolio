import { Router } from "express";
// import { checkAuth } from "../../utils/checkAuth";
import { blogController } from "./blog.controller";


const route = Router()

route.post('/',blogController.createBlog)
route.get("/", blogController.getAllBlog)
route.get("/:id",blogController.singleBlog)
route.delete("/:id", blogController.deletePost)
route.patch("/:id", blogController.updatePost)


export const blogRouter = route;