import { Perfil } from './perfil';
import { Pessoa } from './pessoa';

export class Usuario {
    id: number;
    login: string;
    password: string;
    cargo: String;
    pessoa: Pessoa;
    perfil: Perfil;
}
