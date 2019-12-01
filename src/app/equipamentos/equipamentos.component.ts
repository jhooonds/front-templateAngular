import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, NavigationExtras } from "@angular/router";
import { Equipamento } from "app/model/equipamento";
import { EquipamentoService } from "app/services/equipamento.service";

@Component({
  selector: "app-equipamentos",
  templateUrl: "./equipamentos.component.html",
  styleUrls: ["./equipamentos.component.scss"]
})
export class EquipamentosComponent implements OnInit {
  dataSource: Equipamento[];

  constructor(private route: ActivatedRoute, private router: Router, private apiEquipamento: EquipamentoService) {}

  newEquip() {
    this.router.navigate(["/equipamentos-add"]);
  }

  visualizarAmostras(equipamento: Equipamento) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "equipamento": JSON.stringify(equipamento)
      }
    };
    this.router.navigate(['/medicao'],navigationExtras);
  }

  ngOnInit() {
    this.apiEquipamento.getEquipamentos().subscribe( 
      res => this.dataSource = res
    )
  }

  editEquipamento(equipamento: Equipamento) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "equipamento": JSON.stringify(equipamento)
      }
    }
    this.router.navigate(['/equipamentos-edit'], navigationExtras);
  }
}
