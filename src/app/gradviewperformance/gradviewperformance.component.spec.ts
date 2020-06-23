import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradviewperformanceComponent } from './gradviewperformance.component';

describe('GradviewperformanceComponent', () => {
  let component: GradviewperformanceComponent;
  let fixture: ComponentFixture<GradviewperformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradviewperformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradviewperformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
