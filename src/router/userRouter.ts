import { UserController } from "./../controller/UserController";
import express from "express";

export const userRouter = express.Router();
const userController = new UserController();
userRouter.post("/", userController.signUp);
userRouter.get("/:id", userController.getById);
