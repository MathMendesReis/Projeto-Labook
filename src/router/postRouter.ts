import { PostController } from "../controller/PostController";
import express from "express";

export const postRouter = express.Router();
const post_controller = new PostController();

postRouter.post("/create", post_controller.create_post);
postRouter.get("/", post_controller.get_post);
