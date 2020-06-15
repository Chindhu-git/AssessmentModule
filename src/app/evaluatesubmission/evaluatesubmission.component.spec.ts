import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluatesubmissionComponent } from './evaluatesubmission.component';

describe('EvaluatesubmissionComponent', () => {
  let component: EvaluatesubmissionComponent;
  let fixture: ComponentFixture<EvaluatesubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluatesubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluatesubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
