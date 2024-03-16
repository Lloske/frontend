import { Component } from '@angular/core';
import { UserPersonnalDataService } from '../../services/user-personnal-data.service';
import { PersonalData } from '../../models/personal-data';

@Component({
  selector: 'app-subnavbar-employees',
  templateUrl: './subnavbar-employees.component.html',
  styleUrls: ['./subnavbar-employees.component.scss']
})
export class SubnavbarEmployeesComponent {
  constructor(private _userPersonnalDataService : UserPersonnalDataService) {
    this._userPersonnalDataService.$subjet.subscribe({
      next : (data : PersonalData) => {
        this.firstName = data.firstname;
        this.lastName = data.lastname;
      }
    })
  }
  // active = 1;
  firstName : string = '';
  lastName : string = '';
  role : string = 'Rôle';
}
