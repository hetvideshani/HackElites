import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCoorComponent } from './login-coor.component';

describe('LoginCoorComponent', () => {
  let component: LoginCoorComponent;
  let fixture: ComponentFixture<LoginCoorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginCoorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginCoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
