import { User, UserModel, UserModelToken } from "../models/User";
import { BaseDatabase } from "./BaseDataBase";

export class UserDataBase extends BaseDatabase {
  public static TABLE_ACCOUNTS = "users";

  public async signUp(user: User):Promise<void> {
    await BaseDatabase.connection(UserDataBase.TABLE_ACCOUNTS).insert(user);
  }
  public async getById(id: string): Promise<UserModel | undefined> {
    return  await BaseDatabase.connection(
      UserDataBase.TABLE_ACCOUNTS
    ).where({ id }).first();
    
  }

  public async getByEmail(email: string): Promise<UserModel | undefined> {
    return await BaseDatabase.connection(
      UserDataBase.TABLE_ACCOUNTS
    ).where({ email }).first()
  
  }

  public async getPassword(password:string): Promise<UserModel | undefined>{
    return await BaseDatabase.connection(
      UserDataBase.TABLE_ACCOUNTS
    ).where({ password }).first()
  }

  public async editUser(input:UserModelToken): Promise<void>{
    await BaseDatabase.connection(
      UserDataBase.TABLE_ACCOUNTS
    ).where({id:input.id})
    .update(input)
  }

 
}
