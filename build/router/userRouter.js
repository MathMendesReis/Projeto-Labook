"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const UserController_1 = require("./../controller/UserController");
const express_1 = __importDefault(require("express"));
exports.userRouter = express_1.default.Router();
const userController = new UserController_1.UserController();
exports.userRouter.post("/singUp", userController.signUp);
exports.userRouter.post("/login", userController.login);
//# sourceMappingURL=userRouter.js.map