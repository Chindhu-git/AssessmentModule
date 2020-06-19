import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerprojectsComponent } from './trainerprojects.component';

describe('TrainerprojectsComponent', () => {
  let component: TrainerprojectsComponent;
  let fixture: ComponentFixture<TrainerprojectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerprojectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
