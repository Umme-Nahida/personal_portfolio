"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = require("./app/modules/auth/auth.route");
const cors_1 = __importDefault(require("cors"));
const user_route_1 = require("./app/modules/user/user.route");
const blog_route_1 = require("./app/modules/blog/blog.route");
const app = (0, express_1.default)();
// -----------------middleware--------------
app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
    credentials: true,
})); // Enables Cross-Origin Resource Sharing 
app.use(express_1.default.json()); // Parse incoming JSON requests
app.use("/api/v1/auth", auth_route_1.authRouter);
app.use("/api/v1/user", user_route_1.userRoute);
app.use("/api/v1/blog", blog_route_1.blogRouter);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
exports.default = app;
