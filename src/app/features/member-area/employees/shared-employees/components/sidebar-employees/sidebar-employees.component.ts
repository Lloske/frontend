import { Component } from '@angular/core';
import { UserPersonnalDataService } from '../../services/user-personnal-data.service';
import { Observable } from 'rxjs';
import { PersonalData } from '../../models/personal-data';

@Component({
  selector: 'app-sidebar-employees',
  templateUrl: './sidebar-employees.component.html',
  styleUrls: ['./sidebar-employees.component.scss']
})
export class SidebarEmployeesComponent {

   constructor (private _userPersonnalDataService : UserPersonnalDataService){    
   }

   getAll() : Observable<PersonalData[]> {
    return this._userPersonnalDataService.getAll();
   }
   
 
}
