import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBuayaHomeComponent } from './manage-buaya-home.component';

describe('ManageBuayaHomeComponent', () => {
  let component: ManageBuayaHomeComponent;
  let fixture: ComponentFixture<ManageBuayaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageBuayaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageBuayaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
