import { createLike } from "../../models/like_dislike/Like_dislike";
import { BaseDatabase } from "../BaseDataBase";

export class Like_dislike_database extends BaseDatabase {
  private TABLE_ACCOUNTS = "likeDislike";

  public async like(input: createLike) {}
}