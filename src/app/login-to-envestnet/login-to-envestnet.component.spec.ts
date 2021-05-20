import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginToEnvestnetComponent } from './login-to-envestnet.component';

describe('LoginToEnvestnetComponent', () => {
  let component: LoginToEnvestnetComponent;
  let fixture: ComponentFixture<LoginToEnvestnetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginToEnvestnetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginToEnvestnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
