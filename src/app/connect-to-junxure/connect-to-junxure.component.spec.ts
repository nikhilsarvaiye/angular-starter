import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectToJunxureComponent } from './connect-to-junxure.component';

describe('ConnectToJunxureComponent', () => {
  let component: ConnectToJunxureComponent;
  let fixture: ComponentFixture<ConnectToJunxureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectToJunxureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectToJunxureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
