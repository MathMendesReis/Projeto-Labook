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
exports.UserBusiness = void 0;
const BadRequesteError_1 = require("./../../error/BadRequesteError");
const UserDataBase_1 = require("./../../database/users/UserDataBase");
class UserBusiness {
    signUp(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const userDataBase = new UserDataBase_1.UserDataBase();
            const isUser = yield userDataBase.getById(user.id);
            if (isUser.length > 0) {
                throw new BadRequesteError_1.BadRequestError("'Usuario' ja cadastrado");
            }
            const isEmail = yield userDataBase.getByEmail(user.email);
            if (isEmail.length > 0) {
                throw new BadRequesteError_1.BadRequestError("'email' já cadastrado");
            }
            if (!user.email.includes("@")) {
                throw new BadRequesteError_1.BadRequestError("necessario inserir um email valído.");
            }
            yield userDataBase.signUp(user);
            const output = {
                message: "cadastro realizado com sucesso",
            };
            return output;
        });
    }
    login(userLogin) {
        return __awaiter(this, void 0, void 0, function* () {
            const userDataBase = new UserDataBase_1.UserDataBase();
            if (typeof userLogin.userEmail !== "string") {
                throw new BadRequesteError_1.BadRequestError("email ou senha incorreta.");
            }
            if (typeof userLogin.userPassword !== "string") {
                throw new BadRequesteError_1.BadRequestError("email ou senha incorreta.");
            }
            const result = yield userDataBase.login(userLogin);
            if (result.length === 0) {
                throw new BadRequesteError_1.BadRequestError("email ou senha incorreta.");
            }
            const output = {
                message: "'login' realizado com sucesso",
            };
            return result;
        });
    }
}
exports.UserBusiness = UserBusiness;
//# sourceMappingURL=UserBusiness.js.map