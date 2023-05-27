import { Like_dislike, modelLike } from "../models/Like_dislike";
import { BaseDatabase } from "./BaseDataBase";

export class Like_dislike_database extends BaseDatabase {
  private static TABLE_ACCOUNTS = "likes_dislikes";

  public async like(input: Like_dislike):Promise<void> {
    await BaseDatabase.connection(Like_dislike_database.TABLE_ACCOUNTS).insert(
      input
    );
  }

  public async updateLike(input: Like_dislike): Promise<void> {
    await BaseDatabase.connection(Like_dislike_database.TABLE_ACCOUNTS)
    .update({
      like:input.getike()
    });
  }

  public async getLikeById({
    user_id,
    post_id,
  }: modelLike): Promise<modelLike[]> {
    return await BaseDatabase.connection(Like_dislike_database.TABLE_ACCOUNTS)
      .where({ user_id })
      .andWhere({ post_id });
  }
}