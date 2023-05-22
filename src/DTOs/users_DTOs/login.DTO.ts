import z from 'zod'
export interface LoginInputDTO {
    user?:string,
    email?:string, 
    password:string
}
export interface LoginOutputDTO {
    token: string
}
export const LoginDTOSchemma = z.object({
    user:z.string().optional(),
    email:z.string().optional(),
    password:z.string()
}).transform((data)=> data as LoginInputDTO)