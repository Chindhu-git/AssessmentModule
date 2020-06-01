import { TestBed } from '@angular/core/testing';

import { GradauthorisationService } from './gradauthorisation.service';

describe('GradauthorisationService', () => {
  let service: GradauthorisationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GradauthorisationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
