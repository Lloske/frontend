import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarEmployeesComponent } from './navbar-employees.component';

describe('NavbarEmployeesComponent', () => {
  let component: NavbarEmployeesComponent;
  let fixture: ComponentFixture<NavbarEmployeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarEmployeesComponent]
    });
    fixture = TestBed.createComponent(NavbarEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
