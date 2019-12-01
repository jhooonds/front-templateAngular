import { Component, OnInit } from '@angular/core';
import { Medicao } from 'app/model/medicao';
import { MedicaoService } from 'app/services/medicao.service';
import { Amostra } from 'app/model/amostra';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from 'app/model/cliente';
import { EquipamentoService } from 'app/services/equipamento.service';
import { Equipamento } from 'app/model/equipamento';

@Component({
  selector: 'app-medicao',
  templateUrl: './medicao.component.html',
  styleUrls: ['./medicao.component.scss']
})
export class MedicaoComponent implements OnInit {
  dataSource: Medicao[];
  idToQuery: String;
  typeToQuery: String;
  nameToShow: String;

  constructor(private route: ActivatedRoute, private router: Router, private apiMedicao: MedicaoService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params["cliente"] != null ) {
        let cliente: Cliente;
        cliente = JSON.parse(params["cliente"]);
        this.idToQuery = cliente.id+"";
        this.typeToQuery = 'cliente';
        this.nameToShow = cliente.pessoa.nome;
      } else if (params["amostra"] != null) {
        let amostra: Amostra;
        amostra = JSON.parse(params["amostra"]);
        this.idToQuery = amostra.id+"";
        this.typeToQuery = 'amostra';
        this.nameToShow = amostra.codigo + "/" + amostra.cliente.pessoa.nome;
      } else if (params["equipamento"]) {
        let equipamento: Equipamento;
        equipamento = JSON.parse(params["equipamento"]);
        this.idToQuery = equipamento.id+"";
        this.typeToQuery = 'equipamento';
        this.nameToShow = equipamento.nome;
      }
    });
    
    this.apiMedicao.getCustomMedicaos(this.typeToQuery, this.idToQuery)
    .subscribe(res =>
      this.dataSource = res)
  }

  formataAmostra(amostra: Amostra){
    return amostra.codigo + "/" + amostra.cliente.pessoa.nome;
  }

}
