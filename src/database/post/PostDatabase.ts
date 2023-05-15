import { createPost } from "./../../types/types";
import { Post } from "./../../models/posts/Post";
import { BaseDatabase } from "../BaseDataBase";

export class PostDatabase extends BaseDatabase {
  public static TABLE_ACCOUNTS = "posts";

  public async get_post(): Promise<Post[]> {
    const result = await BaseDatabase.connection(PostDatabase.TABLE_ACCOUNTS);
    return result;
  }

  public async get_post_by_id(id: string): Promise<Post[]> {
    const result = await BaseDatabase.connection(
      PostDatabase.TABLE_ACCOUNTS
    ).where({ id: id });
    return result;
  }
  public async create_post(newPost: createPost): Promise<void> {
    const result = await BaseDatabase.connection(
      PostDatabase.TABLE_ACCOUNTS
    ).insert(newPost);
  }
  public async edit_post() {}
  public async delete() {}
}
