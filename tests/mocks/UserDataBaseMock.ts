
import {BaseDatabase} from "../../src/database/BaseDataBase"
import {UserModel, UserModelToken} from "../../src/models/User"
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
    return  usersMock.filter(user => user.id === id)[0]
    
  }

  public async getByEmail(email: string): Promise<UserModel | undefined> {
    return  usersMock.filter(user => user.email === email)[0]
   
  
  }

  public async getPassword(password:string): Promise<UserModel | undefined>{
    return  usersMock.filter(user => user.password === password)[0]
  }

  public async editUser(input:UserModelToken): Promise<void>{

  }
}
