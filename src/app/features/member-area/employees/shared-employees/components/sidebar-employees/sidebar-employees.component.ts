import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserPersonnalDataService } from '../../services/user-personnal-data.service';
import { Observable, Subscription } from 'rxjs';
import { PersonalData, PersonnalDataSideList } from '../../models/personal-data';

@Component({
  selector: 'app-sidebar-employees',
  templateUrl: './sidebar-employees.component.html',
  styleUrls: ['./sidebar-employees.component.scss']
})
export class SidebarEmployeesComponent {

  userList: PersonalData[] = [];
  private subscription!: Subscription;

  constructor(private _userPersonnalDataService: UserPersonnalDataService) {}

  ngOnInit() {
    this.subscription = this._userPersonnalDataService.$userList.subscribe((users: PersonalData[]) => {
      this.userList = users;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getByIdSidebar(id : number){
    this._userPersonnalDataService.getByIdSidebar(id)
  }
 
}
