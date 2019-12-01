import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { ClientesComponent } from '../../clientes/clientes.component';
import { ClientesAddComponent } from '../../clientes/clientes-add/clientes-add.component';
import { ClientesEditComponent } from '../../clientes/clientes-edit/clientes-edit.component';
import { AmostrasComponent } from '../../amostras/amostras.component';
import { AmostrasEditComponent } from '../../amostras/amostras-edit/amostras-edit.component';
import { EquipamentosComponent } from '../../equipamentos/equipamentos.component';
import { EquipamentosAddComponent } from '../../equipamentos/equipamentos-add/equipamentos-add.component';
import { EquipamentosEditComponent } from '../../equipamentos/equipamentos-edit/equipamentos-edit.component';
import { AmostrasAddComponent } from 'app/amostras/amostras-add/amostras-add.component';

export const AdminLayoutRoutes: Routes = [

    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: ClientesComponent },
    { path: 'clientes-add',   component: ClientesAddComponent },
    { path: 'clientes-edit',  component: ClientesEditComponent },
    { path: 'amostras',       component: AmostrasComponent },
    { path: 'amostras-edit',  component: AmostrasEditComponent },
    { path: 'amostras-add',   component: AmostrasAddComponent },
    { path: 'equipamentos',   component: EquipamentosComponent },
    { path: 'equipamentos-add', component: EquipamentosAddComponent },
    { path: 'equipamentos-edit', component: EquipamentosEditComponent }
];
