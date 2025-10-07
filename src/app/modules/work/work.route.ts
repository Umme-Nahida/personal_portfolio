import { Router } from "express";
import { workController } from "./work.controller";


const route = Router()

// create project api 
route.post("/",workController.createProject)
route.get("/",workController.getWorks)
route.delete("/:id", workController.deleteWork)
route.patch("/:id", workController.updateWork)

export const workRouter = route;