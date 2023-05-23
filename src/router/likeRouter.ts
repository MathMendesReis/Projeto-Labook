import express from 'express'
import { Like_dislike_controller } from '../controller/Like_dislike_controller'
import { Like_dislike_business } from '../business/Like_dislike_business'
import { Like_dislike_database } from '../database/Like_dislike'

export const likeRouter = express.Router()

const controller = new Like_dislike_controller(
    new Like_dislike_business(
        new Like_dislike_database()
    )
)

likeRouter.post("/", controller.like);