import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubnavbarEmployeesComponent } from './subnavbar-employees.component';

describe('SubnavbarEmployeesComponent', () => {
  let component: SubnavbarEmployeesComponent;
  let fixture: ComponentFixture<SubnavbarEmployeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubnavbarEmployeesComponent]
    });
    fixture = TestBed.createComponent(SubnavbarEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
