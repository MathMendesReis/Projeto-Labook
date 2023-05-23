import {z} from 'zod'
export interface get_post_output  {
    id:string  ,
    content:string ,
    likes: number,
    dislikes:number ,
    createdAt:string, 
    updatedAtstring:string, 
    creator: {
        id:string,
        name:string
    }
}


export interface GetPostInputDTO {
  token: string; 
}


export const GetPostSchema = z
  .object({
    token: z.string().min(1),
  })
  .transform((data) => data as GetPostInputDTO);