import { likeDTOinput } from "../../DTOs/like_dislike/like_dislike.DTO";
import { Like_dislike_database } from "../../database/like_dislike/Like_dislike";
import { Like_dislike, createLike } from "../../models/like_dislike/Like_dislike";

export class Like_dislike_business {
  constructor(private like_dislike_database: Like_dislike_database) {}
  public async like({ user_id, post_id, like, token }: likeDTOinput) {

    const newLike = new Like_dislike(
        user_id, 
        post_id, 
        like
        );
        
    const likeDB: createLike = {
      user_id: newLike.getUserId(),
      post_id: newLike.getPostId(),
      like: newLike.getike(),
    };
    const result = await this.like_dislike_database.like(likeDB);

  }
}