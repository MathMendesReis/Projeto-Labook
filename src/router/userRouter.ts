import { UserBusiness } from "../business/users/UserBusiness";
import { UserDataBase } from "../database/users/UserDataBase";
import { UserController } from "./../controller/UserController";
import express from "express";

export const userRouter = express.Router();
const userController = new UserController(
    new UserBusiness(
      new UserDataBase()
    )
  )


userRouter.post("/singUp", userController.signUp);
userRouter.post("/login", userController.login);
