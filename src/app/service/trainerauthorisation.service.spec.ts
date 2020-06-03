import { TestBed } from '@angular/core/testing';

import { TrainerauthorisationService } from './trainerauthorisation.service';

describe('TrainerauthorisationService', () => {
  let service: TrainerauthorisationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainerauthorisationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
