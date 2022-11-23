import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContractConditionsComponent } from './contract-conditions/contract-conditions.component';

import { HomeComponent } from './home/home.component';
import { InsuranceDetailComponent } from './insurance-detail/insurance-detail.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'insurance-detail',
    component: InsuranceDetailComponent
  },
  {
    path: 'contract-conditions',
    component: ContractConditionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
