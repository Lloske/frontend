import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { NavbarEmployeesComponent } from './shared-employees/components/navbar-employees/navbar-employees.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { ContractualDataComponent } from './contractual-data/contractual-data.component';
import { HumanResourceComponent } from './human-resource/human-resource.component';


@NgModule({
  declarations: [
    NavbarEmployeesComponent,
    PersonalDataComponent,
    ContractualDataComponent,
    HumanResourceComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ],
  exports: [
    NavbarEmployeesComponent,
    PersonalDataComponent,
    ContractualDataComponent,
    HumanResourceComponent
  ]
})
export class EmployeesModule { }
