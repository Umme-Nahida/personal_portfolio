"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workRouter = void 0;
const express_1 = require("express");
const work_controller_1 = require("./work.controller");
const route = (0, express_1.Router)();
// create project api 
route.post("/", work_controller_1.workController.createProject);
route.get("/", work_controller_1.workController.getWorks);
route.delete("/:id", work_controller_1.workController.deleteWork);
route.patch("/:id", work_controller_1.workController.updateWork);
exports.workRouter = route;
