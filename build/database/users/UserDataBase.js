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
exports.UserDataBase = void 0;
const BaseDataBase_1 = require("../BaseDataBase");
class UserDataBase extends BaseDataBase_1.BaseDatabase {
    signUp(user) {
        return __awaiter(this, void 0, void 0, function* () {
            yield BaseDataBase_1.BaseDatabase.connection(UserDataBase.TABLE_ACCOUNTS).insert(user);
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield BaseDataBase_1.BaseDatabase.connection(UserDataBase.TABLE_ACCOUNTS).where({ id });
            return user;
        });
    }
    getByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield BaseDataBase_1.BaseDatabase.connection(UserDataBase.TABLE_ACCOUNTS).where({ email: email });
            return user;
        });
    }
    login(userLogin) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userEmail, userPassword } = userLogin;
            const user = yield BaseDataBase_1.BaseDatabase.connection(UserDataBase.TABLE_ACCOUNTS).where({ email: userEmail, password: userPassword });
            return user;
        });
    }
}
exports.UserDataBase = UserDataBase;
UserDataBase.TABLE_ACCOUNTS = "users";
//# sourceMappingURL=UserDataBase.js.map