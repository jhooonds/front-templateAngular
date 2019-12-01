import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Calibracao } from 'app/model/calibracao';
import { CalibracaoService } from 'app/services/calibracao.service';

@Component({
  selector: 'app-calibracao',
  templateUrl: './calibracao.component.html',
  styleUrls: ['./calibracao.component.scss']
})
export class CalibracaoComponent implements OnInit {
  dataSource: Calibracao[];


  constructor(private route: ActivatedRoute, private router: Router, private apiCalibracao: CalibracaoService) {}

  novaCalibracao() {
    this.router.navigate(['/calibracao-add'])
}

  ngOnInit() {
    this.apiCalibracao.getCalibracaos().subscribe(
      res => this.dataSource = res
    )
  }

}
