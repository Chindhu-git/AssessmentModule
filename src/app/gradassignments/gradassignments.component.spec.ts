import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradassignmentsComponent } from './gradassignments.component';

describe('GradassignmentsComponent', () => {
  let component: GradassignmentsComponent;
  let fixture: ComponentFixture<GradassignmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradassignmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradassignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
