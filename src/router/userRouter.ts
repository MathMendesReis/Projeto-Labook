import { UserBusiness } from "../business/UserBusiness";
import { UserDataBase } from "../database/UserDataBase";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { TokenManager } from "../services/TokenManager";
import { UserController } from "./../controller/UserController";
import express from "express";

export const userRouter = express.Router();
const userController = new UserController(
    new UserBusiness(
      new UserDataBase(),
      new IdGenerator(),
      new TokenManager(),
      new HashManager()
    )
  )


userRouter.post("/singUp", userController.signUp);
userRouter.post("/login", userController.login);
userRouter.put("/resetpassword", userController.generateResetToken);


