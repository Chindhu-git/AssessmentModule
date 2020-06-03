import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradprofileComponent } from './gradprofile.component';

describe('GradprofileComponent', () => {
  let component: GradprofileComponent;
  let fixture: ComponentFixture<GradprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
