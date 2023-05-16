import { CreateUserSchema } from "./../DTOs/posts_DTOs/create_Post_DTOS";
import { Response } from "express";
import { Request } from "express";
import { BaseError } from "../error/BaseError";
import { PostBusiness } from "../business/post/PostBusiness";
import { edit_postDTOSchemma } from "../DTOs/posts_DTOs/edit_post.DTO";
import {ZodError} from 'zod'
export class PostController {
  constructor(private postBusiness: PostBusiness) {}
  public get_post = async (req: Request, res: Response): Promise<void> => {
    try {
      const result = await this.postBusiness.get_post();
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
        id: req.body.id,
        creator_id: req.body.creator_id,
        content: req.body.content,
        likes: req.body.likes,
        dislikes: req.body.dislikes,
        created_at: req.body.created_at,
        update_at: req.body.update_at,
      });

      const result = await this.postBusiness.create_post(input);
      res.status(201).send(result);
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
  public edit_post = async (req: Request, res: Response): Promise<void> => {
    try {
    
      const input = edit_postDTOSchemma.parse({
        id: req.params.id,
        content: req.body.content,
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
  public like_dislike_post = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const input = {
        user_id: req.params,
        post_id: req.params,
        like_dislike: req.body,
      };
      res.status(200).send("result");
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
