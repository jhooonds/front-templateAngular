import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmostrasComponent } from './amostras.component';
import { AmostrasAddComponent } from './amostras-add/amostras-add.component';

@NgModule({
  declarations: [AmostrasComponent, AmostrasAddComponent],
  imports: [
    CommonModule
  ]
})
export class AmostrasModule { }
