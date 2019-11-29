import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { ClientesComponent } from '../../clientes/clientes.component';
import { ClientesAddComponent } from '../../clientes/clientes-add/clientes-add.component'
import { ClientesEditComponent } from '../../clientes/clientes-edit/clientes-edit.component'
import { AmostrasComponent } from '../../amostras/amostras.component';
import { AmostrasAddComponent } from '../../amostras/amostras-add/amostras-add.component';
import { AmostrasEditComponent } from '../../amostras/amostras-edit/amostras-edit.component';
import { EquipamentosComponent } from '../../equipamentos/equipamentos.component';
import { EquipamentosAddComponent } from '../../equipamentos/equipamentos-add/equipamentos-add.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatDatepickerModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatDatepickerModule
  ],
  declarations: [
    DashboardComponent,
    ClientesComponent,
    ClientesAddComponent,
    ClientesEditComponent,
    AmostrasComponent,
    AmostrasAddComponent,
    AmostrasEditComponent,
    EquipamentosComponent,
    EquipamentosAddComponent,
  ]
})

export class AdminLayoutModule {}
