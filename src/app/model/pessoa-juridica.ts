import { Pessoa } from './pessoa';
import { Endereco } from './endereco';

export class PessoaJuridica extends Pessoa{
    cnpj: String;
    fantasia: String;

    constructor(id: number, nome: String, dt_nascimento: String, telefone: String, email: String, endereco: Endereco, cnpj: String, fantasia: String) {
        super(id, nome, dt_nascimento, telefone, email, endereco);
        this.cnpj = cnpj;
        this.fantasia = fantasia;
    }
}
