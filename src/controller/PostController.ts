import { createPost } from "./../types/types";
import { Response } from "express";
import { Request } from "express";
import { BaseError } from "../error/BaseError";
import { PostBusiness } from "../business/post/PostBusiness";
export class PostController {
  public async get_post(req: Request, res: Response): Promise<void> {
    try {
      const postBusiness = new PostBusiness();
      const result = await postBusiness.get_post();
      res.status(200).send(result);
    } catch (error) {
      if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  }
  public async create_post(req: Request, res: Response): Promise<void> {
    try {
      const input: createPost = {
        id: req.body.id,
        creator_id: req.body.creator_id,
        content: req.body.content,
        likes: req.body.likes,
        dislikes: req.body.dislikes,
        created_at: req.body.created_at,
        update_at: req.body.update_at,
      };
      const postBusiness = new PostBusiness();
      const result = await postBusiness.create_post(input);
      res.status(201).send(result);
    } catch (error) {
      if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  }
  public async edit_post(req: Request, res: Response): Promise<void> {
    try {
      const input = {
        id: req.params.id,
        content: req.body.content,
      };
      const post_business = new PostBusiness();
      const result = await post_business.edit_post(input);
      res.status(200).send(result);
    } catch (error) {
      if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  }
  public async delete_post(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const post_business = new PostBusiness();
      const result = await post_business.delete(id);
      res.status(200).send(result);
    } catch (error) {
      if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  }
  public async like_dislike_post(req: Request, res: Response): Promise<void> {
    try {
      const input = {
        user_id: req.params,
        post_id: req.params,
        like_dislike: req.body,
      };
      res.status(200).send("result");
    } catch (error) {
      if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  }
}
