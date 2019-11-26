import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './clientes/user-profile.component';
import { ClientesAddComponent } from './clientes/clientes-add/clientes-add.component';
import { AmostrasComponent } from './amostras/amostras.component';
import { AmostrasAddComponent } from './amostras/amostras-add/amostras-add.component';
import { AgmCoreModule } from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { EquipamentosComponent } from './equipamentos/equipamentos.component';
import { EquipamentosAddComponent } from './equipamentos/equipamentos-add/equipamentos-add.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioAddComponent } from './usuarios/usuario-add/usuario-add.component';
import { CalibracaoComponent } from './calibracao/calibracao.component';
import { CalibracaoAddComponent } from './calibracao/calibracao-add/calibracao-add.component';
import { LoginComponent } from './login/login.component';
import { RecoveryPasswordComponent } from './login/recovery-password/recovery-password.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    UsuariosComponent,
    UsuarioAddComponent,
    CalibracaoComponent,
    CalibracaoAddComponent,
    LoginComponent,
    RecoveryPasswordComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
