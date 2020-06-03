import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerassignmentsComponent } from './trainerassignments.component';

describe('TrainerassignmentsComponent', () => {
  let component: TrainerassignmentsComponent;
  let fixture: ComponentFixture<TrainerassignmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerassignmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerassignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
