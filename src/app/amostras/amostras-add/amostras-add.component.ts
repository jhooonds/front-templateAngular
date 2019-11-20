import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-amostras-add',
  templateUrl: './amostras-add.component.html',
  styleUrls: ['./amostras-add.component.scss']
})
export class AmostrasAddComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  backInitial(){
    this.router.navigate(['/amostras']);
  }

  ngOnInit() {
  }

}
