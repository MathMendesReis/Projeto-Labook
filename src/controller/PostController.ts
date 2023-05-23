import { CreateUserSchema } from "../DTOs/create_Post_DTOS";
import { Response } from "express";
import { Request } from "express";
import { BaseError } from "../error/BaseError";
import { PostBusiness } from "../business/PostBusiness";
import { edit_postDTOSchemma } from "../DTOs/edit_post.DTO";
import {ZodError} from 'zod'
import { GetPostSchema } from "../DTOs/get_posts_DTOs";

export class PostController {
  constructor(private postBusiness: PostBusiness) {}
  public get_post = async (req: Request, res: Response): Promise<void> => {
    try {
    const input = GetPostSchema.parse({
      token: req.headers.authorization, // colocamos o token no dto de entrada
    });

      const result = await this.postBusiness.get_post(input);
      res.status(200).send(result);
    } catch (error) {
      if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  };
 
  public create_post = async (req: Request, res: Response): Promise<void> => {
    try {
      const input = CreateUserSchema.parse({
        creator_id: req.body.creator_id,
        content: req.body.content,
        token: req.headers.authorization,
      });

      const result = await this.postBusiness.create_post(input);
      res.status(201).send(result);
    } catch (error) {
      console.log(error)
      if (error instanceof ZodError) {
        res.status(400).send(error.issues)
     } else if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message)
     } else {
        res.status(500).send("Erro inesperado")
     }
    }
  };
  
  public edit_post = async (req: Request, res: Response): Promise<void> => {
    try {
    
      const input = edit_postDTOSchemma.parse({
        id: req.params.id,
        content: req.body.content,
        token: req.headers.authorization,
      });
      const result = await this.postBusiness.edit_post(input);
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
  
  public delete_post = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const result = await this.postBusiness.delete(id);
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
