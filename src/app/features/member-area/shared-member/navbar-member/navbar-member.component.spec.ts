import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMemberComponent } from './navbar-member.component';

describe('NavbarMemberComponent', () => {
  let component: NavbarMemberComponent;
  let fixture: ComponentFixture<NavbarMemberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarMemberComponent]
    });
    fixture = TestBed.createComponent(NavbarMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
