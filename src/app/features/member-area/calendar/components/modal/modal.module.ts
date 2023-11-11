import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalRoutingModule } from './modal-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { AddEventModalComponent } from './add-event-modal/add-event-modal.component';
import { UpdateEventModalComponent } from './update-event-modal/update-event-modal.component';



@NgModule({
  declarations: [
    AddEventModalComponent,
    UpdateEventModalComponent
  ],
  imports: [
    CommonModule,
    ModalRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
  ]
})
export class ModalModule { }
