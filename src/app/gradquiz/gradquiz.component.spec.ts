import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradquizComponent } from './gradquiz.component';

describe('GradquizComponent', () => {
  let component: GradquizComponent;
  let fixture: ComponentFixture<GradquizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradquizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
