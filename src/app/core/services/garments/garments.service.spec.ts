import { TestBed } from '@angular/core/testing';

import { GarmentsService } from './garments.service';

describe('GarmentsService', () => {
  let service: GarmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GarmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
