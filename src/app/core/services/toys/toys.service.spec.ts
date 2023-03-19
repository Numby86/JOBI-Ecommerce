import { TestBed } from '@angular/core/testing';

import { ToysService } from './toys.service';

describe('ToysService', () => {
  let service: ToysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
