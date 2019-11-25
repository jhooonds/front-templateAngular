import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../clientes/user-profile.component';
import { ClientesAddComponent } from '../../clientes/clientes-add/clientes-add.component';
import { AmostrasComponent } from '../../amostras/amostras.component';
import { EquipamentosComponent } from '../../equipamentos/equipamentos.component';
import { EquipamentosAddComponent } from '../../equipamentos/equipamentos-add/equipamentos-add.component';
import { AmostrasAddComponent } from 'app/amostras/amostras-add/amostras-add.component';

export const AdminLayoutRoutes: Routes = [

    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'clientes-add',   component: ClientesAddComponent },
    { path: 'amostras',       component: AmostrasComponent },
    { path: 'amostras-add',   component: AmostrasAddComponent },
    { path: 'equipamentos',   component: EquipamentosComponent },
    { path: 'equipamentos-add', component: EquipamentosAddComponent },
];
