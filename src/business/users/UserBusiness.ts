import { BadRequestError } from "./../../error/BadRequesteError";
import { User } from "./../../models/users/User";
import { UserDataBase } from "./../../database/users/UserDataBase";
import { userCreate } from "../../types/types";

export class UserBusiness {
  public async signUp(user: userCreate): Promise<{}> {
    const userDataBase = new UserDataBase();
    await userDataBase.signUp(user);
    const isUser = await userDataBase.getById(user.id);
    if (isUser.length > 0) {
      throw new BadRequestError("'Usuario' ja cadastrado");
    }
    const output = {
      message: "Login realizado com sucesso",
    };
    return output;
  }
  public async getById(id: string): Promise<User[]> {
    const userDataBase = new UserDataBase();
    const user = await userDataBase.getById(id);
    return user;
  }
}
