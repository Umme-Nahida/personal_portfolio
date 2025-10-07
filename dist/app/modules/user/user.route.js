"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoute = void 0;
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const route = (0, express_1.Router)();
// only rider can access this route
route.post("/register", user_controller_1.userController.createUser);
route.get("/", user_controller_1.userController.getUser);
// create about api 
route.post("/createAbout", user_controller_1.userController.createAbout);
route.get("/about", user_controller_1.userController.getAbout);
// create project api 
route.post("/project", user_controller_1.userController.createProject);
route.get("/project", user_controller_1.userController.getWorks);
route.patch("/:id", user_controller_1.userController.updateUser);
route.delete("/:id", user_controller_1.userController.deleteUser);
exports.userRoute = route;
