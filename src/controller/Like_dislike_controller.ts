import { Request, Response } from "express";
import { Like_dislike_business } from "../business/like_dislike/Like_dislike_business";

export class Like_dislike_controller {
    constructor(private like_dislike_business : Like_dislike_business){}
    public like =async (req:Request, res:Response) => {
        
    }
}