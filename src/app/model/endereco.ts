import { Cidade } from './cidade';

export class Endereco {
    id: number;
    logradouro: String;
    numero: number;
    cep: String;
    complemento: String;
    cidade: Cidade;
}
