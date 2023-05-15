import { PostDatabase } from "./../../database/post/PostDatabase";
import { NotFoundError } from "./../../error/NotFoundError";
import { UserDataBase } from "./../../database/users/UserDataBase";
import { BadRequestError } from "./../../error/BadRequesteError";
import { createPost } from "./../../types/types";
import { Post } from "../../models/posts/Post";
export class PostBusiness {
  public async get_post() {
    const post_db = new PostDatabase();
    const result = await post_db.get_post();
    return result;
  }
  public async create_post(input: createPost): Promise<{}> {
    const { id, creator_id, content, likes, dislikes, created_at, update_at } =
      input;

    if (typeof id !== "string") {
      throw new BadRequestError("'id' invalido");
    }
    if (typeof creator_id !== "string") {
      throw new BadRequestError("'creator_id ' invalido");
    }
    if (typeof content !== "string") {
      throw new BadRequestError("'content ' invalido");
    }
    if (typeof likes !== "number") {
      throw new BadRequestError("'likes ' invalido");
    }
    if (typeof dislikes !== "number") {
      throw new BadRequestError("'dislikes ' invalido");
    }
    if (typeof created_at !== "string") {
      throw new BadRequestError("'created_at ' invalido");
    }
    if (typeof update_at !== "string") {
      throw new BadRequestError("'update_at ' invalido");
    }

    const userDataBase = new UserDataBase();
    const isUser = await userDataBase.getById(creator_id);
    if (isUser.length === 0) {
      throw new NotFoundError("usuario não encontrado");
    }
    const post_db = new PostDatabase();
    const isPost = await post_db.get_post_by_id(id);
    if (isPost.length > 0) {
      throw new NotFoundError("post ja cadastrado");
    }
    const new_post = new Post(
      id,
      creator_id,
      content,
      likes,
      dislikes,
      created_at,
      update_at
    );

    const new_post_db = {
      id: new_post.get_id(),
      creator_id: new_post.get_creator_id(),
      content: new_post.get_content(),
      likes: new_post.get_likes(),
      dislikes: new_post.get_dislikes(),
      created_at: new_post.get_created_at(),
      update_at: new_post.get_update_at(),
    };

    const result = await post_db.create_post(new_post_db);

    const output = {
      message: `post criado com sucesso`,
    };

    return output;
  }

  public async edit_post() {}
  public async delete() {}
}
