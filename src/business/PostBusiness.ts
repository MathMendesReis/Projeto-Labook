import { PostDatabase } from "../database/PostDatabase";
import { NotFoundError } from "../error/NotFoundError";
import { Post } from "../models/Post";
import {
  CreatePostInputDTO,
  CreatePostOutputDTO,
  PostDB,
} from "../DTOs/create_Post_DTOS";
import {
  edit_postDTOInput,
  edit_postDTOOutput,
} from "../DTOs/edit_post.DTO";
import { IdGenerator } from "../services/IdGenerator";
import { TokenManager } from "../services/TokenManager";
import { GetPostInputDTO } from "../DTOs/get_posts_DTOs";
import { BadRequestError } from "../error/BadRequesteError";
import { HashManager } from "../services/HashManager";
import { USER_ROLES } from "../models/User";
export class PostBusiness {
  constructor(
    private postDatabase: PostDatabase,
    private idGenerator: IdGenerator,
    private tokenManager: TokenManager,
    private hashManager: HashManager

  ) {}
  public async get_post(input: GetPostInputDTO) {
    const {token} = input

    const payload = this.tokenManager.getPayload(token)

    if(payload?.role !== USER_ROLES.ADMIN){
      throw new BadRequestError("somente ADMINS podem acessar")
    }

    if (payload === null) {
      throw new BadRequestError("token inválido");
    }



    const result = await this.postDatabase.get_post();
    return result;
  }
  public async create_post(
    input: CreatePostInputDTO
  ): Promise<CreatePostOutputDTO> {
    const { token } = input;
    const isId = await this.postDatabase.get_user_by_id(input.creator_id);
    if (!isId) {
      throw new NotFoundError("usuario não esta cadastrado");
    }

    const payload = this.tokenManager.getPayload(token)

    if(payload === null){
      throw new BadRequestError("token invalido")
    }
    const new_post = new Post(
      this.idGenerator.generate(),
      input.creator_id,
      input.content,
      0,
      0,
      new Date().toISOString(),
      new Date().toISOString()
    );

    const new_post_db: PostDB = {
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
    const {token} = input
    const payload = this.tokenManager.getPayload(token)
    if(payload === null){
      throw new BadRequestError("token invalido")
    }
    const postDB = await this.postDatabase.get_post_by_id(input.id);
    if(!postDB){
      throw new NotFoundError("'Post' não cadastrado")
    }
    

    const postUpdate = new Post(
      postDB.id,
      postDB.creator_id,
      input.content,
      postDB.likes,
      postDB.dislikes,
      postDB.created_at,
      new Date().toISOString()
    );

    const post_update = {
      id: postUpdate.get_id(),
      creator_id: postUpdate.get_creator_id(),
      content: postUpdate.get_content(),
      likes: postUpdate.get_likes(),
      dislikes: postUpdate.get_dislikes(),
      created_at: postUpdate.get_created_at(),
      update_at: postUpdate.get_update_at(),
    };
    await this.postDatabase.edit_post(post_update);
    return {
      content: "post alterado com sucesso",
    };
  }

  public async delete(id: string) {
    const post = await this.postDatabase.get_post_by_id(id);
    console.log(post)
    if (!post) {
      throw new NotFoundError("post não encontrado");
    }
    const isUser = await this.postDatabase.checkIdUserInPost(post.creator_id)
    if(isUser.length < 1){
      throw new BadRequestError("usuario não criou este post");
    }
    const result = await this.postDatabase.delete_post(id);
    const output = {
      message: `Post excluido com sucesso.`,
    };
    return output;
  }
}
