import { TestBed } from '@angular/core/testing';

import { ApiBooksService } from './api-books.service';

describe('ApiBooksService', () => {
  let service: ApiBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiBooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
