import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';
import { BasicPipesComponent } from './pages/basic-pipes/basic-pipes.component';
import { NumberPipesComponent } from './pages/number-pipes/number-pipes.component';
import { UncommonPipesComponent } from './pages/uncommon-pipes/uncommon-pipes.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    BasicPipesComponent,
    NumberPipesComponent,
    UncommonPipesComponent
  ],
  imports: [
    CommonModule,
    PipesRoutingModule,
    PrimeNgModule
  ]
})
export class PipesModule { }
