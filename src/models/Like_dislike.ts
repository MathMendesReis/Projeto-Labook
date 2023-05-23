export class Like_dislike {
  public getike(): number {
    return this.like;
  }

  public getUserId(): string {
    return this.user_id;
  }

  public getPostId(): string {
    return this.user_id;
  }

  constructor(
    private user_id: string,
    private post_id: string,
    private like: number
  ) {}
}

export interface modelLike {
  user_id: string;
  post_id: string;
  like: number;
}
