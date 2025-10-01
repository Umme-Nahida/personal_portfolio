import { Router } from "express";
import { authController } from "./auth.controller";


const route = Router()

route.post('/login',authController.login)
// route.get('/')
// route.get('/:id')
// route.delete("/:id")
// route.patch("/:id")


export const authRouter = route;