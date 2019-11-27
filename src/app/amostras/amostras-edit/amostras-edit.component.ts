import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AmostraService } from 'app/services/amostra.service';

@Component({
  selector: 'app-amostras-edit',
  templateUrl: './amostras-edit.component.html',
  styleUrls: ['./amostras-edit.component.scss']
})
export class AmostrasEditComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private _api: AmostraService){}

  backList(){
    this.router.navigate(['/amostras'])
  }

  ngOnInit() {
  }

}
