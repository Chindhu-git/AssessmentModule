import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewprojectsubmissionComponent } from './viewprojectsubmission.component';

describe('ViewprojectsubmissionComponent', () => {
  let component: ViewprojectsubmissionComponent;
  let fixture: ComponentFixture<ViewprojectsubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewprojectsubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewprojectsubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
