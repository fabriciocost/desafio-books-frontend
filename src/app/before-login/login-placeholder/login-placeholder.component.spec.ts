import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPlaceholderComponent } from './login-placeholder.component';

describe('LoginPlaceholderComponent', () => {
  let component: LoginPlaceholderComponent;
  let fixture: ComponentFixture<LoginPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginPlaceholderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
