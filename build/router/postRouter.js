"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRouter = void 0;
const PostController_1 = require("../controller/PostController");
const express_1 = __importDefault(require("express"));
exports.postRouter = express_1.default.Router();
const post_controller = new PostController_1.PostController();
exports.postRouter.post("/create", post_controller.create_post);
exports.postRouter.get("/", post_controller.get_post);
exports.postRouter.post("/:id", post_controller.edit_post);
//# sourceMappingURL=postRouter.js.map