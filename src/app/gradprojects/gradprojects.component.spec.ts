import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradprojectsComponent } from './gradprojects.component';

describe('GradprojectsComponent', () => {
  let component: GradprojectsComponent;
  let fixture: ComponentFixture<GradprojectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradprojectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
