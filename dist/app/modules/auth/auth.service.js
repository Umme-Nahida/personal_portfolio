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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const db_1 = require("../../config/db");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const login = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isExistsUser = yield db_1.prisma.user.findUnique({ where: { email: payload === null || payload === void 0 ? void 0 : payload.email } });
    // check is user is exists
    if (!isExistsUser) {
        throw new Error("Invalid Credentials");
    }
    // check password 
    const isMatch = yield bcryptjs_1.default.compare(payload.password, isExistsUser.password);
    if (!isMatch) {
        throw new Error("Invalid Credentials password does'nt exists");
    }
    const { password } = isExistsUser, rest = __rest(isExistsUser, ["password"]);
    return Object.assign({}, rest);
});
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isExistsUser = yield db_1.prisma.user.findUnique({ where: { id } });
    // check is user is exists
    if (!isExistsUser) {
        throw new Error("Invalid Credentials");
    }
    // delete user 
    const user = yield db_1.prisma.user.delete({ where: {
            id: id
        } });
    return user;
});
exports.authService = {
    login,
    deleteUser
};
