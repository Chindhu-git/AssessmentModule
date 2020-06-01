import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradhomeComponent } from './gradhome.component';

describe('GradhomeComponent', () => {
  let component: GradhomeComponent;
  let fixture: ComponentFixture<GradhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
