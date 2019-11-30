import { Component, OnInit } from '@angular/core';
import { Equipamento } from 'app/model/equipamento';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipamentoService } from 'app/services/equipamento.service';

@Component({
  selector: 'app-equipamentos-add',
  templateUrl: './equipamentos-add.component.html',
  styleUrls: ['./equipamentos-add.component.scss']
})
export class EquipamentosAddComponent implements OnInit {
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
  }

  enviarEquipamento(){
    this.apiEquipamento.addEquipamento(this.equipamento).subscribe(
      res => {
          console.log(res);
        }, (err) => {
          console.log(err);
      });
  }

}
