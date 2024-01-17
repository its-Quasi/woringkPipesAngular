import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesRoutingModule } from './pipes-routing.module';
import { BasicPipesComponent } from './pages/basic-pipes/basic-pipes.component';
import { NumberPipesComponent } from './pages/number-pipes/number-pipes.component';
import { UncommonPipesComponent } from './pages/uncommon-pipes/uncommon-pipes.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { FormsModule } from '@angular/forms';
import { CustomPipesComponent } from './pages/custom-pipes/custom-pipes.component';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';
import { CanFlyPipe } from './pipes/canFly.pipe';
import { SortByPipe } from './pipes/sortBy.pipe';



@NgModule({
  declarations: [
    BasicPipesComponent,
    NumberPipesComponent,
    UncommonPipesComponent,
    CustomPipesComponent,
    ToggleCasePipe,
    CanFlyPipe,
    SortByPipe
  ],
  imports: [
    CommonModule,
    PipesRoutingModule,
    PrimeNgModule,
    FormsModule
  ]
})
export class PipesModule { }
