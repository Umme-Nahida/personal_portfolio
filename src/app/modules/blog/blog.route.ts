import { Router } from "express";
import { checkAuth } from "../../utils/checkAuth";
import { Role } from "../../../types/type";
import { blogController } from "./blog.controller";


const route = Router()

route.post('/',checkAuth(Role.admin),blogController.createBlog)
route.get("/", blogController.getAllBlog)
route.get('/:id',checkAuth(Role.admin),blogController.singleBlog)
route.delete("/:id", checkAuth(Role.admin), blogController.deletePost)
route.patch("/:id", checkAuth(Role.admin), blogController.updatePost)


export const blogRouter = route;