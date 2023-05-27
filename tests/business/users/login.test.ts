import { LoginDTOSchemma } from "../../../src/DTOs/login.DTO"
import {UserBusiness} from "../../../src/business/UserBusiness"
import { HashManagerMock } from "../../mocks/HashManagerMoker"
import { IdGeneratorMocker } from "../../mocks/IdGenaratorMoker"
import { TokenManagerMock } from "../../mocks/TokenManagerMocker"
import { UserDataBaseMock } from "../../mocks/UserDataBaseMock"

const userBusiness = new UserBusiness(
    new UserDataBaseMock(),
    new IdGeneratorMocker(),
    new TokenManagerMock(),
    new HashManagerMock()
)

describe("testando singup",()=>{
    test("deve gerar token ao cadastrar", async () => {
        const input = LoginDTOSchemma.parse( { email: "matheus@outlook.com", password:"123456" });
        
    
        const output = await userBusiness.login(input)
    
        expect(output).toEqual({
            message: "Login realizado com sucesso",
            token: "token-mock-fulano"
        })
      })
})