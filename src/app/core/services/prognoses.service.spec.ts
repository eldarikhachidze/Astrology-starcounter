import { TestBed } from '@angular/core/testing';

import { PrognosesService } from './prognoses.service';

describe('PrognosesService', () => {
  let service: PrognosesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrognosesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
