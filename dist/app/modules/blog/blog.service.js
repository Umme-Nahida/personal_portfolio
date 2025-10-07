"use strict";
// import { Prisma } from "../../../generated/prisma"
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
exports.blogService = void 0;
const db_1 = require("../../config/db");
const createBlog = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log("payload",payload)
    const blog = yield db_1.prisma.post.create({
        data: payload
    });
    return blog;
});
const singleBlog = (id) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log("id:",id);
    const post = yield db_1.prisma.post.findUnique({ where: { id }, include: { author: true } });
    if (!post) {
        throw new Error("Blog not found");
    }
    console.log("post", post);
    return post;
});
const getAllBlog = (search, page, limit) => __awaiter(void 0, void 0, void 0, function* () {
    const skip = (page - 1) * limit;
    const post = yield db_1.prisma.post.findMany({
        skip: skip,
        take: limit,
        where: {
            title: { contains: search, mode: "insensitive" }
        },
        include: {
            author: {
                select: {
                    name: true,
                    email: true,
                    address: true,
                    image: true,
                    role: true,
                    createdAt: true, // এটা include করতে ভুলবে না
                }
            }
        },
        orderBy: {
            date: "desc"
        },
    });
    const totalPost = yield db_1.prisma.post.count();
    const totalPage = Math.ceil(totalPost / limit);
    console.log("totalPost,", totalPost);
    return {
        data: post,
        meta: {
            page: page,
            limit: limit,
            totalPage: totalPage,
            totalPost: totalPost
        }
    };
});
// update blog data 
const updateBlog = (id, blogInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield db_1.prisma.post.update({ where: { id }, data: blogInfo });
    return post;
});
// delete blog data 
const deleteBlog = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield db_1.prisma.post.delete({ where: { id } });
    return post;
});
exports.blogService = {
    createBlog,
    getAllBlog,
    singleBlog,
    updateBlog,
    deleteBlog
};
