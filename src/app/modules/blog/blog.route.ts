import { Router } from "express";


const route = Router()

route.post('/create')
route.get('/')
route.get('/:id')


export const blogRouter = route;