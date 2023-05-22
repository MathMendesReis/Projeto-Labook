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
    message:string,
    token: string
}
export const SingUpDtoSchemma = z.object({
    name:z.string({invalid_type_error:"name precisa ser do tipo string"})
    .min(3,{message:'precisa ter no minimo 3 caracteres'}),
    email:z.string().includes('@'),
    password:z.string().min(6),
}).transform((data)=> data as SingUpDtoInputDTO)