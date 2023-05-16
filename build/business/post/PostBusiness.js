"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostBusiness = void 0;
const PostDatabase_1 = require("./../../database/post/PostDatabase");
const NotFoundError_1 = require("./../../error/NotFoundError");
const UserDataBase_1 = require("./../../database/users/UserDataBase");
const BadRequesteError_1 = require("./../../error/BadRequesteError");
const Post_1 = require("../../models/posts/Post");
class PostBusiness {
    get_post() {
        return __awaiter(this, void 0, void 0, function* () {
            const post_db = new PostDatabase_1.PostDatabase();
            const result = yield post_db.get_post();
            return result;
        });
    }
    create_post(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, creator_id, content, likes, dislikes, created_at, update_at } = input;
            if (typeof id !== "string") {
                throw new BadRequesteError_1.BadRequestError("'id' invalido");
            }
            if (typeof creator_id !== "string") {
                throw new BadRequesteError_1.BadRequestError("'creator_id ' invalido");
            }
            if (typeof content !== "string") {
                throw new BadRequesteError_1.BadRequestError("'content ' invalido");
            }
            if (typeof likes !== "number") {
                throw new BadRequesteError_1.BadRequestError("'likes ' invalido");
            }
            if (typeof dislikes !== "number") {
                throw new BadRequesteError_1.BadRequestError("'dislikes ' invalido");
            }
            if (typeof created_at !== "string") {
                throw new BadRequesteError_1.BadRequestError("'created_at ' invalido");
            }
            if (typeof update_at !== "string") {
                throw new BadRequesteError_1.BadRequestError("'update_at ' invalido");
            }
            const userDataBase = new UserDataBase_1.UserDataBase();
            const isUser = yield userDataBase.getById(creator_id);
            if (isUser.length === 0) {
                throw new NotFoundError_1.NotFoundError("usuario não encontrado");
            }
            const post_db = new PostDatabase_1.PostDatabase();
            const isPost = yield post_db.get_post_by_id(id);
            if (isPost.length > 0) {
                throw new NotFoundError_1.NotFoundError("post ja cadastrado");
            }
            const new_post = new Post_1.Post(id, creator_id, content, likes, dislikes, created_at, update_at);
            const new_post_db = {
                id: new_post.get_id(),
                creator_id: new_post.get_creator_id(),
                content: new_post.get_content(),
                likes: new_post.get_likes(),
                dislikes: new_post.get_dislikes(),
                created_at: new_post.get_created_at(),
                update_at: new_post.get_update_at(),
            };
            yield post_db.create_post(new_post_db);
            const output = {
                message: `post criado com sucesso`,
            };
            return output;
        });
    }
    edit_post(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const post_db = new PostDatabase_1.PostDatabase();
            const [postOld] = yield post_db.get_post_by_id(input.id);
            if (!postOld) {
                throw new NotFoundError_1.NotFoundError("post não encontrado");
            }
        });
    }
    delete() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
exports.PostBusiness = PostBusiness;
//# sourceMappingURL=PostBusiness.js.map