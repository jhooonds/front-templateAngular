import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'app/model/cliente';
import { ClienteService } from 'app/services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  dataSource: Cliente[];

  constructor(private route: ActivatedRoute, private router: Router, private apiCliente: ClienteService) { }

  newCliente() {
      this.router.navigate(['/clientes-add'])
  }

  editCliente() {
    this.router.navigate(['/clientes-edit'])
  }

  ngOnInit() {
    this.apiCliente.getClientes().subscribe(
      res => this.dataSource = res
    )
  }

}
