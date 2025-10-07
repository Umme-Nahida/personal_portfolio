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
exports.blogController = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const blog_service_1 = require("./blog.service");
const sendResponse_1 = require("../../utils/sendResponse");
const createBlog = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = req.body;
    const result = yield blog_service_1.blogService.createBlog(blog);
    res.status(201).send(result);
}));
const getAllBlog = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { search } = req.query || "";
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;
    const result = yield blog_service_1.blogService.getAllBlog(search, page, limit);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 201,
        success: true,
        message: "all user retrieve successfully",
        data: result,
    });
}));
const deletePost = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield blog_service_1.blogService.deleteBlog(Number(id));
    res.status(201).json({
        success: true,
        message: "Post has been deleted successfully",
        data: null,
    });
}));
const updatePost = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const userInfo = req.body;
    const result = yield blog_service_1.blogService.updateBlog(Number(id), userInfo);
    res.status(201).json({
        success: true,
        message: "Post has been updated successfully",
        data: result,
    });
}));
const singleBlog = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const post = yield blog_service_1.blogService.singleBlog(Number(id));
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 201,
        success: true,
        message: "Single user retrieve successfully",
        data: post
    });
}));
exports.blogController = {
    createBlog,
    getAllBlog,
    singleBlog,
    updatePost,
    deletePost
};
