import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AmostraService } from '../services/amostra.service'
import { Amostra } from 'app/model/amostra';

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
  ngOnInit() {
    this._api.getAmostras()
    .subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
    }, err => {
      console.log(err);
    });
    
  }
  

}
