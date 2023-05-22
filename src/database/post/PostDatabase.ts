import { createPost, like_dislike } from "./../../types/types";
import { BaseDatabase } from "../BaseDataBase";
import { PostDB } from "../../DTOs/posts_DTOs/create_Post_DTOS";
import { get_post_output } from "../../DTOs/posts_DTOs/get_posts_DTOs";

export class PostDatabase extends BaseDatabase {
  public static TABLE_ACCOUNTS = "posts";

  public async get_post(): Promise<get_post_output[]> {
    const result = await BaseDatabase.connection(PostDatabase.TABLE_ACCOUNTS)
      .select("posts.*", "users.name")
      .from(PostDatabase.TABLE_ACCOUNTS)
      .innerJoin("users", "posts.creator_id", "users.id");
      console.log(result)
    const formaterResult = result.map((post) => {
      return {
        id: post.id,
        content: post.content,
        likes: post.likes,
        dislikes: post.dislikes,
        createdAt: post.created_at,
        updatedAtstring: post.update_at,
        creator: {
          id: post.creator_id,
          name: post.name,
        },
      };
    });

    return formaterResult;
  }

  public async get_post_by_id(id: string): Promise<PostDB> {
    const [result] = await BaseDatabase.connection(
      PostDatabase.TABLE_ACCOUNTS
    ).where({ id });
    return result;
  }
  public async get_user_by_id(id: string): Promise<createPost> {
    const [result] = await BaseDatabase.connection("users").where({ id });
    return result;
  }
  public async create_post(newPost: PostDB): Promise<void> {
    await BaseDatabase.connection(PostDatabase.TABLE_ACCOUNTS).insert(newPost);
  }
  public async edit_post(postUpdate: createPost): Promise<void> {
    const result = await BaseDatabase.connection(PostDatabase.TABLE_ACCOUNTS)
      .where({ id: postUpdate.id })
      .update(postUpdate);
  }

  public async checkIdUserInPost(id: string): Promise<createPost[]> {
    return await BaseDatabase.connection(PostDatabase.TABLE_ACCOUNTS).where({
      creator_id: id,
    });
  }
  public async delete_post(id: string): Promise<void> {
    await BaseDatabase.connection(PostDatabase.TABLE_ACCOUNTS)
      .del()
      .where({ id: id });
  }
}
