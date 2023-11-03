import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractualDataComponent } from './contractual-data.component';

describe('ContractualDataComponent', () => {
  let component: ContractualDataComponent;
  let fixture: ComponentFixture<ContractualDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContractualDataComponent]
    });
    fixture = TestBed.createComponent(ContractualDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
