import { v4 } from 'uuid'

export class IdGeneratorMocker {
    public generate = (): string => {
        return "id-mock"
    }
}