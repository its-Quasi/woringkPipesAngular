import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicPipesComponent } from './pages/basic-pipes/basic-pipes.component';
import { NumberPipesComponent } from './pages/number-pipes/number-pipes.component';
import { UncommonPipesComponent } from './pages/uncommon-pipes/uncommon-pipes.component';
import { CustomPipesComponent } from './pages/custom-pipes/custom-pipes.component';


const routes: Routes = [
  {
    path : '',
    component : BasicPipesComponent
  },
  {
    path : 'number',
    component : NumberPipesComponent
  },
  {
    path : 'uncommon',
    component : UncommonPipesComponent
  },
  {
    path : 'custom',
    component : CustomPipesComponent
  },
  {
    path : '**',
    redirectTo : ''
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipesRoutingModule { }
