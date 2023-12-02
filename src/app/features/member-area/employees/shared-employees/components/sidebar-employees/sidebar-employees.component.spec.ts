import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarEmployeesComponent } from './sidebar-employees.component';

describe('SidebarEmployeesComponent', () => {
  let component: SidebarEmployeesComponent;
  let fixture: ComponentFixture<SidebarEmployeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarEmployeesComponent]
    });
    fixture = TestBed.createComponent(SidebarEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
