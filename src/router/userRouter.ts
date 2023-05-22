import { UserBusiness } from "../business/users/UserBusiness";
import { UserDataBase } from "../database/users/UserDataBase";
import { IdGenerator } from "../services/IdGenerator";
import { TokenManager } from "../services/TokenManager";
import { UserController } from "./../controller/UserController";
import express from "express";

export const userRouter = express.Router();
const userController = new UserController(
    new UserBusiness(
      new UserDataBase(),
      new IdGenerator(),
      new TokenManager()
    )
  )


userRouter.post("/singUp", userController.signUp);
userRouter.post("/login", userController.login);
