import { Router } from "express";

const route = Router()

// only rider can access this route
route.post("/register")
route.post("/login")


export const userRoute = route;