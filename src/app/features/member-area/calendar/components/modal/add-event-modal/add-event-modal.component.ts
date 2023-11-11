import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-event-modal',
  templateUrl: './add-event-modal.component.html',
  styleUrls: ['./add-event-modal.component.scss']
})
export class AddEventModalComponent {

  addEventForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.addEventForm = this._formBuilder.group({
      //nomControl : [value, [validateurs synchrones] , [validateurs asynchrones]]
      //[null, [Validators.required, Validators.maxLength(100), Validators.pattern(/^[\D]*$/)] , []],
      shiftStartDate: [""], // Remplacer l'input html par un selecteur automatique
      shiftEndDate: [""], // Remplacer l'input html par un selecteur automatique
      shiftStartTime: [""],
      shiftEndTime: [""],
      shiftPause: [""],
      shiftTeam: [""],
      shiftMeal: [""],
      shiftNote: [""],
    })
  }
  onSubmit(){
    console.log(this.addEventForm.value);    
  }
}
