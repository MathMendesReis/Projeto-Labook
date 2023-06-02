import { resolveTxt } from "dns";
import { likeDTOOutput, likeDTOinput } from "../DTOs/like_dislike.DTO";
import { Like_dislike_database } from "../database/Like_dislike";
import { BadRequestError } from "../error/BadRequesteError";
import {
  Like_dislike,
  modelLike,
} from "../models/Like_dislike";
import { UserDataBase } from "../database/UserDataBase";
import { PostDatabase } from "../database/PostDatabase";
import { NotFoundError } from "../error/NotFoundError";

export class Like_dislike_business {
  constructor(private like_dislike_database: Like_dislike_database) {}

  public async like(input: likeDTOinput): Promise<likeDTOOutput> {
    const { user_id, post_id, like } = input;

    const userDataBase = new UserDataBase();
    const isUser = await userDataBase.getById(user_id);
    if (!isUser) {
      throw new BadRequestError("'Usuario' não esta ja cadastrado");
    }

    const postDatabase = new PostDatabase();
    const postDB = await postDatabase.get_post_by_id(post_id);
    if (!postDB) {
      throw new NotFoundError("'Post' não cadastrado");
    }

    if (like !== 0 && like !== 1) {
      throw new BadRequestError("insira 0 ou 1 no path like");
    }

    const newLike = new Like_dislike(user_id, post_id, like);

    const likeDB = {
      user_id: newLike.getUserId(),
      post_id: newLike.getPostId(),
      like: newLike.getike(),
    };

    const [isLike] = await this.like_dislike_database.getLikeById(input);
    if (isLike) {
      await this.like_dislike_database.updateLike(newLike);
    } else {
      await this.like_dislike_database.like(newLike);
    }
    if (like === 0) {
      return {
        like: false,
      };
    } else {
      return {
        like: true,
      };
    }
  }

  public async updateLike(input: Like_dislike):Promise<void> {
    await this.like_dislike_database.updateLike(input);
  }
}
