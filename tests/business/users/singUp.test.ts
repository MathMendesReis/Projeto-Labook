import { SingUpDtoSchemma } from "../../../src/DTOs/singUp.DTO"
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
        const input = SingUpDtoSchemma.parse({
          name: "Ciclana",
          email: "ciclana@email.com",
          password: "ciclana321"
        })
    
        const output = await userBusiness.signUp(input)
    
        expect(output).toEqual({
          message: "Cadastro realizado com sucesso",
          token: "token-mock"
        })
      })
})