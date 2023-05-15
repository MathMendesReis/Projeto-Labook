export class Post {
  private id: string;
  private creator_id: string;
  private content: string;
  private likes: number;
  private dislikes: number;
  private created_at: string;
  private update_at: string;

  public get_id(): string {
    return this.id;
  }
  public get_creator_id(): string {
    return this.creator_id;
  }
  public get_content(): string {
    return this.content;
  }
  public get_likes(): number {
    return this.likes;
  }
  public get_dislikes(): number {
    return this.dislikes;
  }
  public get_created_at(): string {
    return this.created_at;
  }
  public get_update_at(): string {
    return this.update_at;
  }

  public set_id(newValue: string) {
    this.id = newValue;
  }
  public set_creator_id(newValue: string) {
    this.creator_id = newValue;
  }
  public set_content(newValue: string) {
    this.content = newValue;
  }
  public set_likes(newValue: number) {
    this.likes = newValue;
  }
  public set_dislikes(newValue: number) {
    this.dislikes = newValue;
  }
  public set_created_at(newValue: string) {
    this.created_at = newValue;
  }
  public set_update_at(newValue: string) {
    this.update_at = newValue;
  }

  constructor(
    id: string,
    creator_id: string,
    content: string,
    likes: number,
    dislikes: number,
    created_at: string,
    update_at: string
  ) {
    this.id = id;
    this.creator_id = creator_id;
    this.content = content;
    this.likes = likes;
    this.dislikes = dislikes;
    this.created_at = created_at;
    this.update_at = update_at;
  }
}
