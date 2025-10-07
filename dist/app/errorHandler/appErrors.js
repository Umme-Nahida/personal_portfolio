"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppError extends Error {
    constructor(status, message, stack = '') {
        super(message); // throw new Error(message)
        this.statusCode = status;
        if (stack) {
            this.stack = stack;
        }
        else {
            // capture the error stack and keeping bydefault stack
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
exports.default = AppError;
