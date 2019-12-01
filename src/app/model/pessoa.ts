import { Endereco } from './endereco';

export class Pessoa {
    id: number;
    nome: String;
    dt_nascimento: String;
    telefone: String;
    email: String;
    endereco: Endereco;

    constructor(id: number, nome: String, dt_nascimento: String, telefone: String, email: String, endereco: Endereco) {
        this.id = id;
        this.nome = nome;
        this.dt_nascimento = dt_nascimento;
        this.telefone = telefone;
        this.email = email;
        this.endereco = endereco;
    }
}
