import { User, UserModel } from "../../models/users/User";
import { userCreate } from "../../types/types";
import { BaseDatabase } from "../BaseDataBase";
import { LoginInputDTO } from "../../DTOs/users_DTOs/login.DTO";

export class UserDataBase extends BaseDatabase {
  public static TABLE_ACCOUNTS = "users";

  public async signUp(user: User) {
    await BaseDatabase.connection(UserDataBase.TABLE_ACCOUNTS).insert(user);
  }
  public async getById(id: string): Promise<User[]> {
    const user = await BaseDatabase.connection(
      UserDataBase.TABLE_ACCOUNTS
    ).where({ id });
    return user;
  }

  public async getByEmail(email: string): Promise<User[]> {
    const user = await BaseDatabase.connection(
      UserDataBase.TABLE_ACCOUNTS
    ).where({ email: email });
    return user;
  }
  public async login(input: LoginInputDTO): Promise<UserModel> {
    const { user, email, password } = input;
    const [isUser] = await BaseDatabase.connection(
      UserDataBase.TABLE_ACCOUNTS
    ).where({ email: email, password: password });
    return isUser;
  }
}
