import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewquizsubmissionComponent } from './viewquizsubmission.component';

describe('ViewquizsubmissionComponent', () => {
  let component: ViewquizsubmissionComponent;
  let fixture: ComponentFixture<ViewquizsubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewquizsubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewquizsubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
