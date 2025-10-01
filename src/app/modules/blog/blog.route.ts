import { Router } from "express";


const route = Router()

route.post('/create')
route.get('/')
route.get('/:id')
route.delete("/:id")
route.patch("/:id")


export const blogRouter = route;