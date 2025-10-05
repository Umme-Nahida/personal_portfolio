import { Router } from "express";
import { authController } from "./auth.controller";


const route = Router()

route.post('/login',authController.login)
route.post("/logout",authController.logout)
// route.get('/')
// route.get('/:id')
route.delete("/:id",authController.deleteUser)
// route.patch("/:id")


export const authRouter = route;