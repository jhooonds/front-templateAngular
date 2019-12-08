import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'app/model/cliente';
import { Cidade } from 'app/model/cidade';
import { Estado } from 'app/model/estado';
import { CidadeService } from 'app/services/cidade.service';
import { EstadoService } from 'app/services/estado.service';
import { ClienteService } from 'app/services/cliente.service';
import { Endereco } from 'app/model/endereco';
import { PessoaFisica } from 'app/model/pessoa-fisica';
import { PessoaJuridica } from 'app/model/pessoa-juridica';
import { PessoaFisicaService } from 'app/services/pessoa-fisica.service';

@Component({
  selector: 'app-clientes-edit',
  templateUrl: './clientes-edit.component.html',
  styleUrls: ['./clientes-edit.component.scss']
})
export class ClientesEditComponent implements OnInit {
  personType: string;
  cliente: Cliente;
  clienteToUpdate: any;
  cidade: Cidade;
  cidades: Cidade[];
  estado: Estado;
  estados: Estado[];
  endereco: Endereco;
  
  cpfCnpj: String;
  genero: String;
  fantasia: String;
  nome: String;
  email: String;
  telefone: String;
  data: String;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private apiCidade: CidadeService,
    private apiEstado: EstadoService,
    private apiCliente: ClienteService) {}

  backList() {
    this.router.navigate(['/user-profile'])
  }

  editaCliente(){
    this.endereco.cidade = this.cidade;
    if (this.personType === 'fisica') {
      this.cliente.pessoa = new PessoaFisica(this.cliente.pessoa.id, this.nome, this.data, this.telefone, this.email, this.endereco, this.cpfCnpj, this.genero);
    } else if (this.personType === 'juridica') {
      this.cliente.pessoa = new PessoaJuridica(this.cliente.pessoa.id, this.nome, this.data, this.telefone, this.email, this.endereco, this.cpfCnpj, this.fantasia);
    } else {
      window.alert('Selecione tipo de Cliente');
    }

    this.apiCliente.updateCliente(this.cliente, this.cliente.pessoa, this.personType).subscribe (
      res => {
        console.log(res);
        this.router.navigate(["/user-profile"]);
      }, (err) => {
        console.log(err);
        window.alert("Falha ao enviar");
    });

  }

  ngOnInit() {
    this.cliente = new Cliente();
    this.cidade = new Cidade();
    this.estado = new Estado();
    this.endereco = new Endereco();
    
    this.route.queryParams.subscribe(params => {
      this.clienteToUpdate = JSON.parse(params["cliente"]);
    });

    this.cliente.id = this.clienteToUpdate.id;
    this.cliente.codigo = this.clienteToUpdate.codigo;
    this.cliente.pessoa = this.clienteToUpdate.pessoa;
    this.nome = this.clienteToUpdate.pessoa.nome;
    this.email = this.clienteToUpdate.pessoa.email;
    this.telefone = this.clienteToUpdate.pessoa.telefone;
    this.data = this.clienteToUpdate.pessoa.dt_nascimento;
    this.endereco = this.clienteToUpdate.pessoa.endereco;
    this.cidade = this.endereco.cidade;
    this.estado = this.endereco.cidade.estado;
    
    if (this.clienteToUpdate.pessoa.cpf){
      this.personType = 'fisica';
      this.genero = this.clienteToUpdate.pessoa.genero;
      this.cpfCnpj = this.clienteToUpdate.pessoa.cpf;
    } else if (this.clienteToUpdate.pessoa.cnpj) {
      this.personType = 'juridica';
      this.fantasia = this.clienteToUpdate.pessoa.fantasia;
      this.cpfCnpj = this.clienteToUpdate.pessoa.cnpj;
    }
    
    this.apiCidade.getCidades()
    .subscribe(res => {
      this.cidades = res;
      this.cidades.unshift(this.cidade);
    });
    this.apiEstado.getEstados()
    .subscribe(res => {
      this.estados = res;
      this.estados.unshift(this.estado);
    });

  }

}
