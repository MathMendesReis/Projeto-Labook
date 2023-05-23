import { Request, Response } from "express";
import { Like_dislike_business } from "../business/Like_dislike_business";
import { ZodError } from "zod";
import { BaseError } from "../error/BaseError";
import { likeDTOSchemma } from "../DTOs/like_dislike.DTO";

export class Like_dislike_controller {
    constructor(private like_dislike_business : Like_dislike_business){}
    public like =async (req:Request, res:Response) => {
        try {
            const input = likeDTOSchemma.parse({
              user_id: req.body.user_id,
              post_id: req.body.post_id,
              like: req.body.like,
              token: req.headers.authorization,
            });
            const result = await this.like_dislike_business.like(input);
            
            res.status(200).send(result)
            
        } catch (error) {
          console.log(error)
            if (error instanceof ZodError) {
              res.status(400).send(error.issues);
            } else if (error instanceof BaseError) {
              res.status(error.statusCode).send(error.message);
            } else {
              res.status(500).send("Erro inesperado");
            }
        }
    }
}