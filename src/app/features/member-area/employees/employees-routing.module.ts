import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractualDataComponent } from './contractual-data/contractual-data.component';
import { HumanResourceComponent } from './human-resource/human-resource.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';

const routes: Routes = [
  { path : "contractual-data", component : ContractualDataComponent },
  { path : "human-resources", component : HumanResourceComponent },
  { path : "personal-data", component : PersonalDataComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
