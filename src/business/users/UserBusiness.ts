import { NotFoundError } from "./../../error/NotFoundError";
import { BadRequestError } from "./../../error/BadRequesteError";
import { User } from "./../../models/users/User";
import { UserDataBase } from "./../../database/users/UserDataBase";
import {
  SingUpDtoInputDTO,
  SingUpDtoOutputDTO,
  USER_ROLES,
} from "../../DTOs/users_DTOs/singUp.DTO";
import { LoginInputDTO } from "../../DTOs/users_DTOs/login.DTO";
import { IdGenerator } from "../../services/IdGenerator";
import { TokenManager, TokenPayload } from "../../services/TokenManager";

export class UserBusiness {
  constructor(
    private userDataBase: UserDataBase,
    private idGenerator: IdGenerator,
    private tokenManager: TokenManager
  ) {}
  public async signUp(input: SingUpDtoInputDTO): Promise<SingUpDtoOutputDTO> {
    const id = this.idGenerator.generate();
    const isUser = await this.userDataBase.getById(id);
    if (isUser.length > 0) {
      throw new BadRequestError("'Usuario' ja cadastrado");
    }
    const isEmail = await this.userDataBase.getByEmail(input.email);
    if (isEmail.length > 0) {
      throw new BadRequestError("'email' já cadastrado");
    }
    const newUser = new User(
      id,
      input.name,
      input.email,
      input.password,
      USER_ROLES.NORMAL,
      new Date().toISOString()
    );

    const result = await this.userDataBase.signUp(newUser);

    const tokenPayload: TokenPayload = {
      id: newUser.getId(),
      name: newUser.getName(),
      role: newUser.getRole()
  }

  const token = this.tokenManager.createToken(tokenPayload)
  const output: SingUpDtoOutputDTO = {
    message: "Cadastro realizado com sucesso",
    token,
  }; 
    return output;
  }

  public async login(input: LoginInputDTO): Promise<SingUpDtoOutputDTO> {
    const userDataBase = new UserDataBase();

    const result = await userDataBase.login(input);
    if (!result) {
      throw new NotFoundError("email ou senha errada.");
    }

    const user = new User(
      result.id,
      result.name,
      result.email,
      result.password,
      result.role,
      result.createdAt
    )
    
    const tokenPayload: TokenPayload = {
      id: user.getId(),
      name: user.getName(),
      role: user.getRole()
  }
  const token = this.tokenManager.createToken(tokenPayload)

    const output: SingUpDtoOutputDTO = {
      message:`login realizado com sucesso`,
      token
    };
    return output;
  }
}
