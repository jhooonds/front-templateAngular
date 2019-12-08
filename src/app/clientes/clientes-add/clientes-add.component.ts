import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AmostraService } from "app/services/amostra.service";
import { Cliente } from "app/model/cliente";
import { PessoaFisica } from "app/model/pessoa-fisica";
import { Cidade } from "app/model/cidade";
import { Estado } from "app/model/estado";
import { ClienteService } from "app/services/cliente.service";
import { CidadeService } from "app/services/cidade.service";
import { EstadoService } from "app/services/estado.service";
import { Endereco } from "app/model/endereco";
import { PessoaJuridica } from "app/model/pessoa-juridica";

@Component({
  selector: "app-clientes-add",
  templateUrl: "./clientes-add.component.html",
  styleUrls: ["./clientes-add.component.scss"]
})
export class ClientesAddComponent implements OnInit {
  personType: string;
  cliente: Cliente;
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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiCidade: CidadeService,
    private apiEstado: EstadoService,
    private apiCliente: ClienteService
  ) {
  }

  backList() {
    this.router.navigate(["/user-profile"]);
  }

  enviaCliente(){
    this.endereco.id = null;
    this.endereco.cidade = this.cidade;
    if (this.personType === 'fisica') {
      this.cliente.pessoa = new PessoaFisica(null, this.nome, this.data, this.telefone, this.email, this.endereco, this.cpfCnpj, this.genero);
    } else if (this.personType === 'juridica') {
      this.cliente.pessoa = new PessoaJuridica(null, this.nome, this.data, this.telefone, this.email, this.endereco, this.cpfCnpj, this.fantasia);
    } else {
      window.alert('Selecione tipo de Cliente');
    }

    this.apiCliente.addCliente(this.cliente, this.cliente.pessoa, this.personType).subscribe (
      res => {
        console.log(res);
        this.router.navigate(["/user-profile"]);
      }, (err) => {
        console.log(err);
        window.alert("Falha ao enviar");
    });

  }

  ngOnInit() {
    this.personType = 'fisica';
    this.cliente = new Cliente();
    this.cidade = new Cidade();
    this.estado = new Estado();
    this.cliente = new Cliente();
    this.endereco = new Endereco();
    this.apiCidade.getCidades()
    .subscribe(res =>
      this.cidades = res);
    this.apiEstado.getEstados()
    .subscribe(res =>
      this.estados = res)
  }
}
