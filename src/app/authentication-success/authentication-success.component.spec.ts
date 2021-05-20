import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationSuccessComponent } from './authentication-success.component';

describe('AuthenticationSuccessComponent', () => {
  let component: AuthenticationSuccessComponent;
  let fixture: ComponentFixture<AuthenticationSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenticationSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
