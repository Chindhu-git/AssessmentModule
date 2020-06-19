import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitprojectsComponent } from './submitprojects.component';

describe('SubmitprojectsComponent', () => {
  let component: SubmitprojectsComponent;
  let fixture: ComponentFixture<SubmitprojectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitprojectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
