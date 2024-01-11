import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicPipesComponent } from './pages/basic-pipes/basic-pipes.component';

const routes: Routes = [
  {
    path : '',
    component : BasicPipesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipesRoutingModule { }
