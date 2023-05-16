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
exports.PostController = void 0;
const BaseError_1 = require("../error/BaseError");
const PostBusiness_1 = require("../business/post/PostBusiness");
class PostController {
    get_post(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const postBusiness = new PostBusiness_1.PostBusiness();
                const result = yield postBusiness.get_post();
                res.status(200).send(result);
            }
            catch (error) {
                if (error instanceof BaseError_1.BaseError) {
                    res.status(error.statusCode).send(error.message);
                }
                else {
                    res.status(500).send("Erro inesperado");
                }
            }
        });
    }
    create_post(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const input = {
                    id: req.body.id,
                    creator_id: req.body.creator_id,
                    content: req.body.content,
                    likes: req.body.likes,
                    dislikes: req.body.dislikes,
                    created_at: req.body.created_at,
                    update_at: req.body.update_at,
                };
                const postBusiness = new PostBusiness_1.PostBusiness();
                const result = yield postBusiness.create_post(input);
                res.status(201).send(result);
            }
            catch (error) {
                if (error instanceof BaseError_1.BaseError) {
                    res.status(error.statusCode).send(error.message);
                }
                else {
                    res.status(500).send("Erro inesperado");
                }
            }
        });
    }
    edit_post(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const input = {
                    id: req.params.id,
                    content: req.body.content,
                };
                const post_business = new PostBusiness_1.PostBusiness();
                const result = yield post_business.edit_post(input);
                res.status(200).send(result);
            }
            catch (error) {
                if (error instanceof BaseError_1.BaseError) {
                    res.status(error.statusCode).send(error.message);
                }
                else {
                    res.status(500).send("Erro inesperado");
                }
            }
        });
    }
    delete_post(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
            }
            catch (error) {
                if (error instanceof BaseError_1.BaseError) {
                    res.status(error.statusCode).send(error.message);
                }
                else {
                    res.status(500).send("Erro inesperado");
                }
            }
        });
    }
}
exports.PostController = PostController;
//# sourceMappingURL=PostController.js.map