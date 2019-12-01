import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { ClientesComponent } from '../../clientes/clientes.component';
import { ClientesAddComponent } from '../../clientes/clientes-add/clientes-add.component';
import { ClientesEditComponent } from '../../clientes/clientes-edit/clientes-edit.component';
import { CalibracaoComponent } from '../../calibracao/calibracao.component';
import { CalibracaoEditComponent } from '../../calibracao/calibracao-edit/calibracao-edit.component';
import { AmostrasComponent } from '../../amostras/amostras.component';
import { AmostrasEditComponent } from '../../amostras/amostras-edit/amostras-edit.component';
import { EquipamentosComponent } from '../../equipamentos/equipamentos.component';
import { EquipamentosAddComponent } from '../../equipamentos/equipamentos-add/equipamentos-add.component';
import { EquipamentosEditComponent } from '../../equipamentos/equipamentos-edit/equipamentos-edit.component';
import { AmostrasAddComponent } from 'app/amostras/amostras-add/amostras-add.component';
import { MedicaoComponent } from '../../medicao/medicao.component';


export const AdminLayoutRoutes: Routes = [

    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: ClientesComponent },
    { path: 'clientes-add',   component: ClientesAddComponent },
    { path: 'clientes-edit',  component: ClientesEditComponent },
    { path: 'calibracao',     component: CalibracaoComponent },
    { path: 'calibracao-edit', component: CalibracaoEditComponent },
    { path: 'amostras',       component: AmostrasComponent },
    { path: 'amostras-edit',  component: AmostrasEditComponent },
    { path: 'amostras-add',   component: AmostrasAddComponent },
    { path: 'equipamentos',   component: EquipamentosComponent },
    { path: 'equipamentos-add', component: EquipamentosAddComponent },
    { path: 'equipamentos-edit', component: EquipamentosEditComponent },
    { path: 'medicao', component: MedicaoComponent }

];
