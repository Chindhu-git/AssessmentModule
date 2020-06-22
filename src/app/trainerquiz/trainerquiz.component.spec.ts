import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerquizComponent } from './trainerquiz.component';

describe('TrainerquizComponent', () => {
  let component: TrainerquizComponent;
  let fixture: ComponentFixture<TrainerquizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerquizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
