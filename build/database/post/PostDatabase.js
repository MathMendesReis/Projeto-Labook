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
exports.PostDatabase = void 0;
const BaseDataBase_1 = require("../BaseDataBase");
class PostDatabase extends BaseDataBase_1.BaseDatabase {
    get_post() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield BaseDataBase_1.BaseDatabase.connection(PostDatabase.TABLE_ACCOUNTS);
            return result;
        });
    }
    get_post_by_id(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield BaseDataBase_1.BaseDatabase.connection(PostDatabase.TABLE_ACCOUNTS).where({ id: id });
            return result;
        });
    }
    create_post(newPost) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield BaseDataBase_1.BaseDatabase.connection(PostDatabase.TABLE_ACCOUNTS).insert(newPost);
        });
    }
    edit_post(postUpdate) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield BaseDataBase_1.BaseDatabase.connection(PostDatabase.TABLE_ACCOUNTS).update(postUpdate);
        });
    }
    delete() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
exports.PostDatabase = PostDatabase;
PostDatabase.TABLE_ACCOUNTS = "posts";
//# sourceMappingURL=PostDatabase.js.map