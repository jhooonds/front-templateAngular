import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { AmostraService } from '../services/amostra.service'
import { Amostra } from 'app/model/amostra';
import { Cliente } from 'app/model/cliente';
import { Endereco } from 'app/model/endereco';

@Component({
  selector: 'app-amostras',
  templateUrl: './amostras.component.html',
  styleUrls: ['./amostras.component.scss']
})

export class AmostrasComponent implements OnInit {
  dataSource: Amostra[];

  constructor(private route: ActivatedRoute, private router: Router, private _api: AmostraService) { }

newAmostra() {
  this.router.navigate(['/amostras-add'])
}

visualizarAmostras(){
  this.router.navigate(['/medicao'])
}

editAmostra(amostra: Amostra){
  let navigationExtras: NavigationExtras = {
    queryParams: {
        "amostra": JSON.stringify(amostra)
    }
  };
  this.router.navigate(['/amostras-edit'], navigationExtras);
}

  ngOnInit() {
    this._api.getAmostras()
    .subscribe(res =>
      this.dataSource = res)
  }

  formataCliente(cliente: Cliente){
   return cliente.pessoa.nome +  ' - ' +  cliente.codigo;
  }

  formataEndereco(endereco: Endereco){
    return endereco.logradouro +  ', ' +  endereco.numero;
   }
}
