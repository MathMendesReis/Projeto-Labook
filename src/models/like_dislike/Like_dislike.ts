export class like_dislike {
  public get_like(): number {
      return this.like;
  }
  public set_like(value: number) {
      this.like = value;
  }
  public get_post_id(): string {
      return this.post_id;
  }
  public set_post_id(value: string) {
      this.post_id = value;
  }
  public get_user_id(): string {
      return this.user_id;
  }
  public set_user_id(value: string) {
      this.user_id = value;
  }
  constructor(
    private user_id: string,
    private post_id: string,
    private like: number
  ) {}
}
