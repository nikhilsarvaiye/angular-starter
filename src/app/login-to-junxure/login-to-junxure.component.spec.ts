import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginToJunxureComponent } from './login-to-junxure.component';

describe('LoginToJunxureComponent', () => {
  let component: LoginToJunxureComponent;
  let fixture: ComponentFixture<LoginToJunxureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginToJunxureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginToJunxureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
