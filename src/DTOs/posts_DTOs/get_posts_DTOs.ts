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