import { userLogin } from "./../types/types";
import { UserBusiness } from "./../business/users/UserBusiness";
import { Request, Response } from "express";
import { userCreate } from "../types/types";
import { BaseError } from "../error/BaseError";
export class UserController {
  public async signUp(req: Request, res: Response): Promise<void> {
    try {
      const { id, name, email, password, role, created_at } = req.body;
      const user: userCreate = {
        id,
        name,
        email,
        password,
        role,
        created_at,
      };
      const userBusiness = new UserBusiness();
      const result = await userBusiness.signUp(user);
      res.status(200).send(result);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send(error.message);
      } else if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  }

  public async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      const userLogin = {
        userEmail: email,
        userPassword: password,
      };
      const userBusiness = new UserBusiness();
      const result = await userBusiness.login(userLogin);
      res.status(200).send(result);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send(error.message);
      } else if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  }
}
