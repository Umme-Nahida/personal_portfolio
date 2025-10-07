"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.workController = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const work_service_1 = require("./work.service");
// -----------create-Project
const createProject = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield work_service_1.workService.createProject(req.body);
    res.status(201).json({
        success: true,
        message: "create Project data retrieve successfully",
        data: result,
    });
}));
const getWorks = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield work_service_1.workService.getWorks();
    res.status(201).json({
        success: true,
        message: "Works Data retrieve successfully",
        data: result,
    });
}));
// updated work
const updateWork = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const userInfo = req.body;
    const result = yield work_service_1.workService.updateWork(Number(id), userInfo);
    res.status(201).json({
        success: true,
        message: "work has been updated successfully",
        data: result,
    });
}));
const deleteWork = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield work_service_1.workService.deleteWork(Number(id));
    res.status(201).json({
        success: true,
        message: "work has been deleted successfully",
        data: null,
    });
}));
exports.workController = {
    createProject,
    getWorks,
    updateWork,
    deleteWork
};
