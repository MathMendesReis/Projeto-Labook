import z from 'zod'

export interface SingUpDtoInputDTO  {
    name:string,
    email:string,
    password:string,
}
export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}
export interface SingUpDtoOutputDTO  {
    token: string
}
export const SingUpDtoSchemma = z.object({
    name:z.string(),
    email:z.string().includes('@'),
    password:z.string().min(6),
}).transform((data)=> data as SingUpDtoInputDTO)