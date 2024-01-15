import { Component } from '@angular/core';
import { UserPersonnalDataService } from '../../services/user-personnal-data.service';
import { Observable, Subscription } from 'rxjs';
import { PersonalData, PersonnalDataSideList } from '../../models/personal-data';

@Component({
  selector: 'app-sidebar-employees',
  templateUrl: './sidebar-employees.component.html',
  styleUrls: ['./sidebar-employees.component.scss']
})
export class SidebarEmployeesComponent {

   constructor (private _userPersonnalDataService : UserPersonnalDataService){    
   }

   private _userListSubscribe : Subscription = new Subscription();
   userList : PersonalData[] = [];

   ngOnInit () : void {

    this._userListSubscribe = this._userPersonnalDataService.getAll().subscribe({
      next : (response) => {
        this.userList = response
        console.log("Récupération de la liste des utilisatateurs avec succes", response)
      },
      error : (error) => {
        console.error("Une erreur s'est produite lors de la récupération de la liste d'utilisateur:", error);
      },
      complete : () =>  {
        console.log("Création de l'utilisateur terminée.");
      },
    })
   }
   
 
}
