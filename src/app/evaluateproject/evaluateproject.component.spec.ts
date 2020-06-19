import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluateprojectComponent } from './evaluateproject.component';

describe('EvaluateprojectComponent', () => {
  let component: EvaluateprojectComponent;
  let fixture: ComponentFixture<EvaluateprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluateprojectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluateprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
