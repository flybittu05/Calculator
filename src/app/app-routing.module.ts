import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { Calculator2Component } from './calculator2/calculator2.component';
const routes: Routes = [
  {
    path:'calculator',
    component:CalculatorComponent,
    pathMatch:'full',
  },
  {
    path:'calculator2',
    component:Calculator2Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
