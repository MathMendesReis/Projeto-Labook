import { BadRequestError } from "./../../error/BadRequesteError";
import { User } from "./../../models/users/User";
import { UserDataBase } from "./../../database/users/UserDataBase";
import { userCreate, userLogin } from "../../types/types";

export class UserBusiness {
  public async signUp(user: userCreate): Promise<{}> {
    const userDataBase = new UserDataBase();
    const isUser = await userDataBase.getById(user.id);
    if (isUser.length > 0) {
      throw new BadRequestError("'Usuario' ja cadastrado");
    }
    const isEmail = await userDataBase.getByEmail(user.email);
    if (isEmail.length > 0) {
      throw new BadRequestError("'email' já cadastrado");
    }
    if (!user.email.includes("@")) {
      throw new BadRequestError("necessario inserir um email valído.");
    }
    await userDataBase.signUp(user);
    const output = {
      message: "cadastro realizado com sucesso",
    };
    return output;
  }

  public async login(userLogin: userLogin) {
    const userDataBase = new UserDataBase();
    if (typeof userLogin.userEmail !== "string") {
      throw new BadRequestError("email ou senha incorreta.");
    }
    if (typeof userLogin.userPassword !== "string") {
      throw new BadRequestError("email ou senha incorreta.");
    }
    const result = await userDataBase.login(userLogin);
    if (result.length === 0) {
      throw new BadRequestError("email ou senha incorreta.");
    }
    const output = {
      message: "'login' realizado com sucesso",
    };
    return result;
  }
}
