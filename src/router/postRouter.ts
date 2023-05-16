import { PostBusiness } from "../business/post/PostBusiness";
import { PostController } from "../controller/PostController";
import express from "express";
import { PostDatabase } from "../database/post/PostDatabase";

export const postRouter = express.Router();
const post_controller = new PostController(
    new PostBusiness(
        new PostDatabase()
    )
);

postRouter.get("/", post_controller.get_post);
postRouter.post("/create", post_controller.create_post);
postRouter.post("/:id", post_controller.edit_post);
postRouter.delete("/:id", post_controller.delete_post);
