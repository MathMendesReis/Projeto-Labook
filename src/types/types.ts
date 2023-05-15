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

export interface createPost {
  id: String;
  creator_id: String;
  content: String;
  likes: number;
  dislikes: number;
  created_at: String;
  update_at: String;
}
