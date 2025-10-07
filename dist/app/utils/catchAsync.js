"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchAsync = void 0;
const catchAsync = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch((error) => {
        console.log("catch", error);
        if (process.env.node_env === "development") {
            res.status(400).json({
                success: false,
                message: (error === null || error === void 0 ? void 0 : error.message) || "Something went wrong",
            });
        }
    });
};
exports.catchAsync = catchAsync;
