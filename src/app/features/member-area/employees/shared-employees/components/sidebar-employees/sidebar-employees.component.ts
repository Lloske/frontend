import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sidebar-employees',
  templateUrl: './sidebar-employees.component.html',
  styleUrls: ['./sidebar-employees.component.scss']
})
export class SidebarEmployeesComponent {
  active = 1;
}
