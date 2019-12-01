import { Pessoa } from './pessoa';
import { Endereco } from './endereco';

export class PessoaFisica extends Pessoa {
    cpf: String;
    genero: String;
    
    constructor(id: number, nome: String, dt_nascimento: String, telefone: String, email: String, endereco: Endereco, cpf: String, genero: String) {
        super(id, nome, dt_nascimento, telefone, email, endereco);
        this.cpf = cpf;
        this.genero = genero;
    }
}
