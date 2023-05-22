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
  id: string;
  creator_id: string;
  content: string;
  likes: number;
  dislikes: number;
  created_at: string;
  update_at: string;
}
export interface updatePost {
  id: string;
  content: string;
}

export interface like_dislike {
  user_id: string;
  post_id: string;
  like_dislike: number;
}
