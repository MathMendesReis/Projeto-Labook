"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const userRouter_1 = require("./router/userRouter");
const postRouter_1 = require("./router/postRouter");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.listen(3003, () => {
    console.log(`Servidor rodando na porta ${3003}`);
});
app.use("/users", userRouter_1.userRouter);
app.use("/posts", postRouter_1.postRouter);
//# sourceMappingURL=index.js.map