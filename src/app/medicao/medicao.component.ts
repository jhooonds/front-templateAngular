import { Component, OnInit } from '@angular/core';
import { Medicao } from 'app/model/medicao';
import { MedicaoService } from 'app/services/medicao.service';
import { Amostra } from 'app/model/amostra';

@Component({
  selector: 'app-medicao',
  templateUrl: './medicao.component.html',
  styleUrls: ['./medicao.component.scss']
})
export class MedicaoComponent implements OnInit {
  dataSource: Medicao[];

  constructor(private apiMedicao: MedicaoService) { }

  ngOnInit() {
    this.apiMedicao.getMedicaos()
    .subscribe(res =>
      this.dataSource = res)
  }

  formataAmostra(amostra: Amostra){
    return amostra.codigo + "/" + amostra.cliente.pessoa.nome;
  }

}
