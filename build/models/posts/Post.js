"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
class Post {
    get_id() {
        return this.id;
    }
    get_creator_id() {
        return this.creator_id;
    }
    get_content() {
        return this.content;
    }
    get_likes() {
        return this.likes;
    }
    get_dislikes() {
        return this.dislikes;
    }
    get_created_at() {
        return this.created_at;
    }
    get_update_at() {
        return this.update_at;
    }
    set_id(newValue) {
        this.id = newValue;
    }
    set_creator_id(newValue) {
        this.creator_id = newValue;
    }
    set_content(newValue) {
        this.created_at = newValue;
    }
    set_likes(newValue) {
        this.likes = newValue;
    }
    set_dislikes(newValue) {
        this.dislikes = newValue;
    }
    set_created_at(newValue) {
        this.created_at = newValue;
    }
    set_update_at(newValue) {
        this.update_at = newValue;
    }
    constructor(id, creator_id, content, likes, dislikes, created_at, update_at) {
        this.id = id;
        this.creator_id = creator_id;
        this.content = content;
        this.likes = likes;
        this.dislikes = dislikes;
        this.created_at = created_at;
        this.update_at = update_at;
    }
}
exports.Post = Post;
//# sourceMappingURL=Post.js.map