import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { PersonalInformationsComponent } from './personal-data/personal-informations.component';
import { NavbarEmployeesComponent } from './shared-employees/components/navbar-employees/navbar-employees.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { ContractualDataComponent } from './contractual-data/contractual-data.component';
import { HumanResourceComponent } from './human-resource/human-resource.component';


@NgModule({
  declarations: [
    PersonalInformationsComponent,
    NavbarEmployeesComponent,
    PersonalDataComponent,
    ContractualDataComponent,
    HumanResourceComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
