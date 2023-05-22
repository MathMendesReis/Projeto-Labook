import { LoginDTOSchemma } from './../DTOs/users_DTOs/login.DTO';
import { UserBusiness } from "./../business/users/UserBusiness";
import { Request, Response } from "express";
import { BaseError } from "../error/BaseError";
import { SingUpDtoSchemma } from "../DTOs/users_DTOs/singUp.DTO";
import {ZodError} from 'zod'
export class UserController {
  constructor(private userBusiness: UserBusiness) {}

  public signUp = async (req: Request, res: Response): Promise<void> => {
    try {
      const input = SingUpDtoSchemma.parse({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,

      });

      const result = await this.userBusiness.signUp(input);
      res.status(200).send(result);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).send(error.issues)
     } else if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message)
     } else {
        res.status(500).send("Erro inesperado")
     }
    }
  };

  public login = async (req: Request, res: Response): Promise<void> => {
    try {
      const input = LoginDTOSchemma.parse( { email: req.body.email, password: req.body.password });
    
      const result = await this.userBusiness.login(input);
      res.status(200).send(result);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).send(error.issues)
     } else if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message)
     } else {
        res.status(500).send("Erro inesperado")
     }
    }
  };
}
