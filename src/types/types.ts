export interface userCreate {
  id: string;
  name: string;
  email: string;
  password: string;
  role: number;
  created_at: string;
}

export interface userLogin {
  userEmail: string;
  userPassword: string;
}
