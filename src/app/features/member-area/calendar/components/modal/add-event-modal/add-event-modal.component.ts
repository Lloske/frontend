import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-event-modal',
  templateUrl: './add-event-modal.component.html',
  styleUrls: ['./add-event-modal.component.scss']
})
export class AddEventModalComponent {

  constructor(private formBuilder: FormBuilder) {}

  addEventForm = this.formBuilder.group({
    shiftStartDate: [""], // Remplacer l'input html par un selecteur automatique
    shiftEndDate: [""], // Remplacer l'input html par un selecteur automatique
    shiftStartTime: [""],
    shiftendTime: [""],
    shiftPause: [""],
    shiftTeam: [""],
    shiftMeal: [""],
    shiftNote: [""],
  })

  onSubmit(){
    console.log(this.addEventForm.value);    
  }


}
