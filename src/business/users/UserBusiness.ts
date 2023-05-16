import { NotFoundError } from './../../error/NotFoundError';
import { BadRequestError } from "./../../error/BadRequesteError";
import { User } from "./../../models/users/User";
import { UserDataBase } from "./../../database/users/UserDataBase";
import {
  SingUpDtoInputDTO,
  SingUpDtoOutputDTO,
  USER_ROLES,
} from "../../DTOs/users_DTOs/singUp.DTO";
import { LoginInputDTO } from "../../DTOs/users_DTOs/login.DTO";

export class UserBusiness {
  constructor(private userDataBase: UserDataBase) {}
  public async signUp(input: SingUpDtoInputDTO): Promise<SingUpDtoOutputDTO> {
    const id:string = Math.floor(Math.random() * 100).toString()
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
    const output = {
      token: "um token jwt"
    };
    return output;
  }

  public async login(input: LoginInputDTO):Promise<SingUpDtoOutputDTO> {
    const userDataBase = new UserDataBase();
   
    const result = await userDataBase.login(input);
    if(!result){
      throw new NotFoundError("email ou senha errada.")
    }
    const output:SingUpDtoOutputDTO = {
      token: "um token jwt"
    };
    return output;
  }
}
