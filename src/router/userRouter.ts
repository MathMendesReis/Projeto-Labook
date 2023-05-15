import { UserController } from "./../controller/UserController";
import express from "express";

export const userRouter = express.Router();
const userController = new UserController();

userRouter.post("/singUp", userController.signUp);
userRouter.post("/login", userController.login);
