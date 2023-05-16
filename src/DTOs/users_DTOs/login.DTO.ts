import z from 'zod'
export interface LoginInputDTO {
    email:string, 
    password:string
}
export interface LoginOutputDTO {
    token: string
}
export const LoginDTOSchemma = z.object({
    email:z.string(),
    password:z.string()
}).transform((data)=> data as LoginInputDTO)