import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
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

  visualizarAmostras(cliente: Cliente) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "cliente": JSON.stringify(cliente)
      }
    };
    this.router.navigate(['/medicao'],navigationExtras);
  }

  editCliente(cliente: Cliente){
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "cliente": JSON.stringify(cliente)
      }
    };
    this.router.navigate(['/clientes-edit'], navigationExtras);
  }

  ngOnInit() {
    this.apiCliente.getClientes().subscribe(
      res => this.dataSource = res
    )
  }

}
