import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AmostraService } from 'app/services/amostra.service';
import { Amostra } from 'app/model/amostra';
import { Cidade } from 'app/model/cidade';
import { Estado } from 'app/model/estado';
import { Cliente } from 'app/model/cliente';
import { ClienteService } from 'app/services/cliente.service';
import { EstadoService } from 'app/services/estado.service';
import { CidadeService } from 'app/services/cidade.service';

@Component({
  selector: 'app-amostras-edit',
  templateUrl: './amostras-edit.component.html',
  styleUrls: ['./amostras-edit.component.scss']
})
export class AmostrasEditComponent implements OnInit {
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
    private apiCliente: ClienteService){

  }

  backList(){
    this.router.navigate(['/amostras'])
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.amostra = JSON.parse(params["amostra"]);
    });
    this.cidade = new Cidade();
    this.estado = new Estado();
    this.cliente = new Cliente();

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
      
      this.apiCliente.getClientes()
    .subscribe(res => {
      this.clientes = res;
      this.clientes.unshift(this.cliente);
    });
      
    this.estado = this.amostra.endereco.cidade.estado;
    this.cliente = this.amostra.cliente;
    this.cidade = this.amostra.endereco.cidade;
    
  }

  editaAmostra() {
    this.amostra.cliente = this.cliente;
    this.amostra.endereco.cidade = this.cidade;

    this.apiAmostra.updateAmostra(this.amostra)
      .subscribe(res => {
          console.log(res);
        }, (err) => {
          console.log(err);
        });

  }

}
