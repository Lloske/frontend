import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { NavbarEmployeesComponent } from './shared-employees/components/navbar-employees/navbar-employees.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { ContractualDataComponent } from './contractual-data/contractual-data.component';
import { HumanResourceComponent } from './human-resource/human-resource.component';
import { SidebarEmployeesComponent } from './shared-employees/components/sidebar-employees/sidebar-employees.component';
import { EmployeesComponent } from './employees.component';
import { SubnavbarEmployeesComponent } from './shared-employees/components/subnavbar-employees/subnavbar-employees.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NavbarEmployeesComponent,
    PersonalDataComponent,
    ContractualDataComponent,
    HumanResourceComponent,
    SidebarEmployeesComponent,
    EmployeesComponent,
    SubnavbarEmployeesComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule, 
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    // NavbarEmployeesComponent,
    // PersonalDataComponent,
    // ContractualDataComponent,
    // HumanResourceComponent
  ]
})
export class EmployeesModule { }
