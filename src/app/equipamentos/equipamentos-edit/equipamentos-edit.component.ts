import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipamentoService } from 'app/services/equipamento.service';

@Component({
  selector: 'app-equipamentos-edit',
  templateUrl: './equipamentos-edit.component.html',
  styleUrls: ['./equipamentos-edit.component.scss']
})
export class EquipamentosEditComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiEquipamento: EquipamentoService
  ) {}

  backList() {
    this.router.navigate(['/equipamentos']);
  }

  ngOnInit() {}
}
