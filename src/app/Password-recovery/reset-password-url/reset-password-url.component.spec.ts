import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordUrlComponent } from './reset-password-url.component';

describe('ResetPasswordUrlComponent', () => {
  let component: ResetPasswordUrlComponent;
  let fixture: ComponentFixture<ResetPasswordUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetPasswordUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswordUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
