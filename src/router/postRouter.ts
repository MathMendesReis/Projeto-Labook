import { PostBusiness } from "../business/PostBusiness";
import { PostController } from "../controller/PostController";
import express from "express";
import { PostDatabase } from "../database/PostDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { TokenManager } from "../services/TokenManager";

export const postRouter = express.Router();
const post_controller = new PostController(
  new PostBusiness(new PostDatabase(), new IdGenerator(), new TokenManager())
);

postRouter.get("/", post_controller.get_post);
postRouter.post("/", post_controller.create_post);
postRouter.put("/:id", post_controller.edit_post);
postRouter.delete("/:id", post_controller.delete_post);
