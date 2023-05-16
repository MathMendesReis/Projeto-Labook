import { PostDatabase } from "./../../database/post/PostDatabase";
import { NotFoundError } from "./../../error/NotFoundError";
import { Post } from "../../models/posts/Post";
import {
  CreatePostInputDTO,
  CreatePostOutputDTO,
} from "../../DTOs/posts_DTOs/create_Post_DTOS";
import {
  edit_postDTOInput,
  edit_postDTOOutput,
} from "../../DTOs/posts_DTOs/edit_post.DTO";
import { PostController } from "../../controller/PostController";
export class PostBusiness {
  constructor(private postDatabase: PostDatabase) {}
  public async get_post() {
    const result = await this.postDatabase.get_post();
    return result;
  }
  public async create_post(
    input: CreatePostInputDTO
  ): Promise<CreatePostOutputDTO> {
   
    const new_post = new Post(
      input.id,
      input.creator_id,
      input.content,
      input.likes,
      input.dislikes,
      input.created_at,
      input.update_at
    );

    const new_post_db: CreatePostInputDTO = {
      id: new_post.get_id(),
      creator_id: new_post.get_creator_id(),
      content: new_post.get_content(),
      likes: new_post.get_likes(),
      dislikes: new_post.get_dislikes(),
      created_at: new_post.get_created_at(),
      update_at: new_post.get_update_at(),
    };

    await this.postDatabase.create_post(new_post_db);

    const output: CreatePostOutputDTO = {
      content: new_post.get_content(),
    };

    return output;
  }

  public async edit_post(
    input: edit_postDTOInput
  ): Promise<edit_postDTOOutput> {
    const postDB = await this.postDatabase.get_post_by_id(input.id);
    const post_update = {
      id: postDB.id,
      creator_id: postDB.creator_id,
      content: input.content,
      likes: postDB.likes,
      dislikes: postDB.dislikes,
      created_at: postDB.created_at,
      update_at: postDB.update_at,
    };
    await this.postDatabase.edit_post(post_update);
    return {
      content: "post alterado com sucesso",
    };
  }

  public async delete(id: string) {
    const post = await this.postDatabase.get_post_by_id(id);
    if (!post) {
      throw new NotFoundError("post não encontrado");
    }
    const result = await this.postDatabase.delete_post(id);
    const output = {
      message: `Post excluido com sucesso.`,
    };
    return output;
  }
  
}
