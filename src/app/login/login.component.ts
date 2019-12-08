import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from 'app/model/usuario';
import { Router } from '@angular/router';
import { UsuarioService } from 'app/services/usuario.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: string;
  senha: string;
  private usuario: Usuario = new Usuario();

  constructor(private authService: AuthService, private router: Router, private apiUsuario: UsuarioService) { }

  mostrarMenu(){
    this.apiUsuario.getUsuarioForLogin(this.login).subscribe(res => {
      this.usuario = res;
      if (this.usuario.password == this.senha) {
        this.router.navigate(['/dashboard'])
      } else {
        window.alert("Usuario e senha não ok")
      }
    })
  }

  ngOnInit() {
  }

}
