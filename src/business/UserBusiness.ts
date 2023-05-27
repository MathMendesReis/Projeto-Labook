import { BadRequestError } from "../error/BadRequesteError";
import { USER_ROLES, User, UserModelToken } from "../models/User";
import { UserDataBase } from "../database/UserDataBase";
import {
  SingUpDtoInputDTO,
  SingUpDtoOutputDTO,

} from "../DTOs/singUp.DTO";
import { LoginInputDTO } from "../DTOs/login.DTO";
import { IdGenerator } from "../services/IdGenerator";
import { TokenManager, TokenPayload, TokenPayloadReset } from "../services/TokenManager";
import { HashManager } from "../services/HashManager";


require('dotenv').config();


export class UserBusiness {
  constructor(
    private userDataBase: UserDataBase,
    private idGenerator: IdGenerator,
    private tokenManager: TokenManager,
    private hashManager: HashManager
  ) {}
  public async signUp(input: SingUpDtoInputDTO): Promise<SingUpDtoOutputDTO> {
    const id = this.idGenerator.generate();
    const hashedPassword = await this.hashManager.hash(input.password)

    const isUser = await this.userDataBase.getById(id)
    if (isUser) {
      throw new BadRequestError("'Usuario' ja cadastrado");
    }
    const isEmail = await this.userDataBase.getByEmail(input.email);
    if (isEmail) {
      throw new BadRequestError("'email' já cadastrado");
    }
    const newUser = new User(
      id,
      input.name,
      input.email,
      hashedPassword,
      USER_ROLES.NORMAL,
      new Date().toISOString()
    );

    const result = await this.userDataBase.signUp(newUser);

    const tokenPayload: TokenPayload = {
      id: newUser.getId(),
      role: newUser.getRole()
  }

  const token = this.tokenManager.createToken(tokenPayload)
  const output: SingUpDtoOutputDTO = {
    message: "Cadastro realizado com sucesso",
    token,
  }; 
    return output;
  }

  public async login({email, password}: LoginInputDTO): Promise<SingUpDtoOutputDTO> {
    const userDataBase = new UserDataBase();
  
    const userDB = await this.userDataBase.getByEmail(email);
    if (!userDB) {
      throw new BadRequestError("'email' não encontrado.");
    }
  
  const hashedPassword = userDB.password
  
    // o serviço hashManager analisa o password do body (plaintext) e o hash
    const isPasswordCorrect = await this.hashManager.compare(password, hashedPassword)
  
    // validamos o resultado
    if (!isPasswordCorrect) {
      throw new BadRequestError("'email' ou 'password' incorretos")
    }
    
    const user = new User(
      userDB.id,
      userDB.name,
      userDB.email,
      userDB.password,
      userDB.role,
      userDB.createdAt
    )
    
    const tokenPayload: TokenPayload = {
      id: user.getId(),
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
