
export interface UserModel {
  id: string;
  name: string;
  email: string;
  password:string,
  role: USER_ROLES;
  createdAt: string;
}
export interface UserModelToken {
  id: string;
  name: string;
  email: string;
  password:string,
  role: USER_ROLES;
  createdAt: string;
  reset_token:string
}
export enum USER_ROLES {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN"
}
export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private role: string,
    private created_at: string
  ) {}
  public getId(): string {
    return this.id;
  }
  public setId(id: string): void {
    this.id = id;
  }
  public getName(): string {
    return this.name;
  }
  public setName(name: string): void {
    this.name = name;
  }
  public getEmail(): string {
    return this.email;
  }
  public setEmail(email: string): void {
    this.email = email;
  }
  public getPassword(): string {
    return this.password;
  }
  public setPassword(password: string): void {
    this.password = password;
  }

  public getRole(): string {
    return this.role;
  }
  public setRole(role: string): void {
    this.role = role;
  }
  public getCreated_at(): string {
    return this.created_at;
  }
}
