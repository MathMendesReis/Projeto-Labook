
import { promises } from "dns";
import {BaseDatabase} from "../../src/database/BaseDataBase"
import {UserModel} from "../../src/models/User"
import {User,USER_ROLES} from "../../src/models/User"

const usersMock: UserModel[] = [
  {
    id: "id-mock-fulano",
    name: "Fulano",
    email: "fulano@email.com",
    password: "hash-mock-fulano", 
    role: USER_ROLES.NORMAL,
    createdAt: new Date().toISOString(),

  },
  {
    id: "id-mock-astrodev",
    name: "Astrodev",
    email: "astrodev@email.com",
    password: "hash-mock-astrodev", // senha = "astrodev99"
    role: USER_ROLES.ADMIN,
    createdAt: new Date().toISOString(),

  },
]

export class UserDataBaseMock extends BaseDatabase {
  public static TABLE_ACCOUNTS = "users";

  public async signUp(user: User):Promise<void> {
  }
  public async getById(id: string): Promise<UserModel | undefined> {
    const user = usersMock.filter(user=>user.id.includes(id))[0]
    if(user){
      return user
    }else{
      return undefined
    }
    
  }

  public async getByEmail(email: string): Promise<UserModel | undefined> {
    const user = usersMock.filter(user=>user.id.includes(email))[0]
    if(user){
      return user
    }else{
      return undefined
    }
  }

  public async getPassword(password:string): Promise<UserModel | undefined>{
    const user = usersMock.filter(user=>user.id.includes(password))[0]
    if(user){
      return user
    }else{
      return undefined
    }
  }

 

 
}
