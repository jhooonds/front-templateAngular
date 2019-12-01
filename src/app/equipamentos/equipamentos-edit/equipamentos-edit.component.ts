import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipamentoService } from 'app/services/equipamento.service';
import { Equipamento } from 'app/model/equipamento';

@Component({
  selector: 'app-equipamentos-edit',
  templateUrl: './equipamentos-edit.component.html',
  styleUrls: ['./equipamentos-edit.component.scss']
})
export class EquipamentosEditComponent implements OnInit {
  equipamento: Equipamento;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private apiEquipamento: EquipamentoService) { }

    backList(){
    this.router.navigate(['/equipamentos']);
  }

  ngOnInit() {
    this.equipamento = new Equipamento();
    this.route.queryParams.subscribe(params => {
      this.equipamento = JSON.parse(params["equipamento"]);
    });
  }

  enviarEquipamento(){
    this.apiEquipamento.updateEquipamento(this.equipamento).subscribe(
      res => {
          console.log(res);
        }, (err) => {
          console.log(err);
      });
  }
}
