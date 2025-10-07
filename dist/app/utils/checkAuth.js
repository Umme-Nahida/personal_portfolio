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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAuth = void 0;
const jwt_1 = require("./jwt");
const appErrors_1 = __importDefault(require("../errorHandler/appErrors"));
const env_1 = require("../config/env");
const checkAuth = (...restRoles) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        // console.log("...restRoles",...restRoles)
        const accessToken = ((_a = req === null || req === void 0 ? void 0 : req.cookies) === null || _a === void 0 ? void 0 : _a.accessToken) || ((_b = req === null || req === void 0 ? void 0 : req.cookies) === null || _b === void 0 ? void 0 : _b.refreshToken) || req.headers.authorization;
        // console.log("accessToken",accessToken)
        if (!accessToken)
            throw new appErrors_1.default(403, "token isn't available");
        const tokenVarify = (0, jwt_1.verifyToken)(accessToken, env_1.envVars.JWT_SECRET);
        if (!restRoles.includes(tokenVarify.role)) {
            throw new appErrors_1.default(403, "you are not allowed to access this route");
        }
        req.verifyUser = tokenVarify;
        next();
    }
    catch (err) {
        next(err);
    }
});
exports.checkAuth = checkAuth;
