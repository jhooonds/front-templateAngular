import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clientes-edit',
  templateUrl: './clientes-edit.component.html',
  styleUrls: ['./clientes-edit.component.scss']
})
export class ClientesEditComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  backList() {
    this.router.navigate(['/user-profile'])
  }

  ngOnInit() {
  }

}
