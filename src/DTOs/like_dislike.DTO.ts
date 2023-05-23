import z from 'zod'
export interface likeDTOinput{
    user_id : string,
    post_id : string,
    like:number,
    token:string
}

export interface likeDTOOutput {
  like:boolean
}

export const likeDTOSchemma = z
  .object({
    user_id: z.string(),
    post_id: z.string(),
    like: z.number(),
    token: z.string(),
  })
  .transform((data) => data as likeDTOinput);