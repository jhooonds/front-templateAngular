import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from 'app/model/usuario';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private usuario: Usuario = new Usuario();

  constructor(private authService: AuthService, private router: Router) { }

  mostrarMenu(){
    this.router.navigate(['/dashboard'])
  }

  ngOnInit() {
  }

}
