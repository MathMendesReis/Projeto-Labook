import express from "express";

import cors from "cors";
import { UserController } from "./controller/UserController";
import { userRouter } from "./router/userRouter";
import { postRouter } from "./router/postRouter";
import dotenv from 'dotenv'

dotenv.config()

const app = express();
app.use(express.json());

app.use(cors());

app.listen(Number(process.env.PORT || 3003), () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`)
})

app.use("/users", userRouter);
app.use("/posts", postRouter);
