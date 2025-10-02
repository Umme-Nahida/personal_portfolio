import { Router } from "express";
import { checkAuth } from "../../utils/checkAuth";
import { Role } from "../../../types/type";
import { blogController } from "./blog.controller";


const route = Router()

route.post('/',checkAuth(Role.admin),blogController.createBlog)
route.get("/", checkAuth(Role.admin), blogController.getAllBlog)
route.get('/:id',blogController.singleBlog)
// route.delete("/:id")
// route.patch("/:id")


export const blogRouter = route;