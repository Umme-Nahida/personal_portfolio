"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const auth_controller_1 = require("./auth.controller");
const route = (0, express_1.Router)();
route.post('/login', auth_controller_1.authController.login);
route.post("/logout", auth_controller_1.authController.logout);
// route.get('/')
// route.get('/:id')
route.delete("/:id", auth_controller_1.authController.deleteUser);
// route.patch("/:id")
exports.authRouter = route;
