import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Amostra } from 'app/model/amostra';
import { AmostraService } from 'app/services/amostra.service';
import { Cidade } from 'app/model/cidade';
import { Estado } from 'app/model/estado';
import { CidadeService } from 'app/services/cidade.service';
import { EstadoService } from 'app/services/estado.service';
import { ClienteService } from 'app/services/cliente.service';
import { Cliente } from 'app/model/cliente';

@Component({
  selector: 'app-amostras-add',
  templateUrl: './amostras-add.component.html',
  styleUrls: ['./amostras-add.component.scss']
})
export class AmostrasAddComponent implements OnInit {
  amostra: Amostra;
  cidade: Cidade;
  estado: Estado;
  cliente: Cliente;
  cidades: Cidade[];
  estados: Estado[];
  clientes: Cliente[];

  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private apiAmostra: AmostraService,
    private apiCidade: CidadeService,
    private apiEstado: EstadoService,
    private apiCliente: ClienteService
    ) { }

  backInitial(){
    this.router.navigate(['/amostras']);
  }

  ngOnInit() {
    this.amostra = new Amostra();
    this.cidade = new Cidade();
    this.estado = new Estado();
    this.cliente = new Cliente();
    this.apiCidade.getCidades()
    .subscribe(res =>
      this.cidades = res);
    this.apiEstado.getEstados()
    .subscribe(res =>
      this.estados = res)
      this.apiCliente.getClientes()
    .subscribe(res =>
      this.clientes = res)

  }

  enviarAmostra() {
    this.amostra.cliente = this.cliente;
    this.amostra.endereco.cidade = this.cidade;

    this.apiAmostra.addAmostra(this.amostra);
      this.apiAmostra.addAmostra(this.amostra)
        .subscribe(res => {
            console.log(res);
          }, (err) => {
            console.log(err);
          });

  }

}
