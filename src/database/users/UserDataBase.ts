import { userLogin } from "./../../types/types";
import { User } from "../../models/users/User";
import { userCreate } from "../../types/types";
import { BaseDatabase } from "../BaseDataBase";

export class UserDataBase extends BaseDatabase {
  public static TABLE_ACCOUNTS = "users";

  public async signUp(user: userCreate) {
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
  public async login(userLogin: userLogin) {
    const { userEmail, userPassword } = userLogin;
    const user = await BaseDatabase.connection(
      UserDataBase.TABLE_ACCOUNTS
    ).where({ email: userEmail, password: userPassword });

    return user;
  }
}
