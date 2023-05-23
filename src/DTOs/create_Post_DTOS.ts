import z from "zod";

import { PostDatabase } from "../database/PostDatabase";

const checkIfIdExists = async (id: string) => {
  const post_database = new PostDatabase();
  const exists = await post_database.get_post_by_id(id);
  return exists;
};
export interface CreatePostInputDTO {
  creator_id: string;
  content: string;
  token:string
}

export interface PostDB {
  id: string;
  creator_id: string;
  content: string;
  likes: number;
  dislikes: number;
  created_at: string;
  update_at: string;
}

export interface CreatePostOutputDTO {
  content: string;
}


export const CreateUserSchema = z
  .object({
    creator_id: z.string(),
    content: z.string(),
    token:z.string()
  })
  .transform((data) => data as CreatePostInputDTO);
