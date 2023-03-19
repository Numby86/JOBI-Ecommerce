import { TestBed } from '@angular/core/testing';

import { ApiToysService } from './api-toys.service';

describe('ApiToysService', () => {
  let service: ApiToysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiToysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
