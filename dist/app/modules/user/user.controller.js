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
exports.userController = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const user_service_1 = require("./user.service");
const createUser = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    const result = yield user_service_1.userService.createUser(user);
    res.status(201).json({
        success: true,
        message: "User has been created successfully",
        data: result,
    });
}));
const getUser = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.userService.getUser();
    res.status(201).json({
        success: true,
        message: "User has been retrieve successfully",
        data: result,
    });
}));
const deleteUser = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield user_service_1.userService.deleteUser(Number(id));
    res.status(201).json({
        success: true,
        message: "User has been deleted successfully",
        data: null,
    });
}));
const updateUser = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const userInfo = req.body;
    const result = yield user_service_1.userService.updateUser(Number(id), userInfo);
    res.status(201).json({
        success: true,
        message: "User has been updated successfully",
        data: result,
    });
}));
const getAbout = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.userService.getAbout();
    res.status(201).json({
        success: true,
        message: "about data has been updated successfully",
        data: result,
    });
}));
const createAbout = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.userService.createAbout(req.body);
    res.status(201).json({
        success: true,
        message: "about data has been updated successfully",
        data: result,
    });
}));
exports.userController = {
    getUser,
    createAbout,
    getAbout,
    createUser,
    deleteUser,
    updateUser
};
