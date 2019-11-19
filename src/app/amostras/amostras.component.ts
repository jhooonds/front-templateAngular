import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-amostras',
  templateUrl: './amostras.component.html',
  styleUrls: ['./amostras.component.scss']
})
export class AmostrasComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }
//kevin

newAmostra() {
  this.router.navigate(['/amostras-add'])
}
  ngOnInit() {
   
  }

}
