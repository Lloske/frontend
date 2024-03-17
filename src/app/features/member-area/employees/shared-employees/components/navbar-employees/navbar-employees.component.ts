import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar-employees',
  templateUrl: './navbar-employees.component.html',
  styleUrls: ['./navbar-employees.component.scss']
})
export class NavbarEmployeesComponent {
  
  active = 1;
  
  displayStatus = 'none';

  addEmployeeModal() {  
    this.displayStatus = 'block';
  }

  updateEmployee() {
    console.log('A CODER');
  }

  closeModal() {
    this.displayStatus = 'none';
  }

  // This function will be called whenever a click event is fired in the document
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
      this.closeModal();
    }
  }
}
