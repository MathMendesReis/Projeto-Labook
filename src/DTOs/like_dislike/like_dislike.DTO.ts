import z from 'zod'
export interface like_dislikeDTO_input{
    user_id : string,
    post_id : string,
    like:number
}

export const like_dislikeDTO_Iniut_schemma = z.object({
    user_id:z.string(),
    post_id:z.string(),
    like:z.number()
}).transform((data)=>data as like_dislikeDTO_input)