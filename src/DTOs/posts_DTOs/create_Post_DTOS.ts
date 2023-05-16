import z from "zod";

import { PostDatabase } from "../../database/post/PostDatabase";

const checkIfIdExists = async (id: string) => {
  const post_database = new PostDatabase();
  const exists = await post_database.get_post_by_id(id);
  return exists;
};
export interface CreatePostInputDTO {
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
    id: z.string().min(1),
    creator_id: z.string(),
    content: z.string(),
    likes: z.number(),
    dislikes: z.number(),
    created_at: z.string(),
    update_at: z.string(),
  })
  .transform((data) => data as CreatePostInputDTO);
