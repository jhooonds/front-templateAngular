import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Amostra } from 'app/model/amostra';
import { AmostraService } from 'app/services/amostra.service';

@Component({
  selector: 'app-amostras-add',
  templateUrl: './amostras-add.component.html',
  styleUrls: ['./amostras-add.component.scss']
})
export class AmostrasAddComponent implements OnInit {
  amostra: Amostra;
  constructor(private route: ActivatedRoute, private router: Router, private _api: AmostraService) { }

  backInitial(){
    this.router.navigate(['/amostras']);
  }

  ngOnInit() {
    this.amostra = new Amostra();
  }

  enviarAmostra(){
    this.amostra.id = null;
    this.amostra.cliente = null;
    this.amostra.endereco.cidade = null;

    this._api.addAmostra(this.amostra);
    
      this._api.addAmostra(this.amostra)
        .subscribe(res => {
            console.log(res);
          }, (err) => {
            console.log(err);
          });

  }

}
