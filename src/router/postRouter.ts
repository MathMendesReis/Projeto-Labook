import { PostController } from "../controller/PostController";
import express from "express";

export const postRouter = express.Router();
const post_controller = new PostController();

postRouter.post("/create", post_controller.create_post);
postRouter.get("/", post_controller.get_post);
postRouter.post("/:id", post_controller.edit_post);
postRouter.delete("/:id", post_controller.delete_post);
