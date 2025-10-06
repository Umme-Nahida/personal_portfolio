import { Router } from "express";
import { userController } from "./user.controller";

const route = Router()

// only rider can access this route
route.post("/register",userController.createUser)
route.get("/",userController.getUser)
// create about api 
route.post("/createAbout",userController.createAbout)
route.get("/about",userController.getAbout)
// create project api 
route.post("/project",userController.createProject)
route.get("/project",userController.getWorks)

route.patch("/:id",userController.updateUser)
route.delete("/:id",userController.deleteUser)


export const userRoute = route;