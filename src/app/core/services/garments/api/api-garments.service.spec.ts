import { TestBed } from '@angular/core/testing';

import { ApiGarmentsService } from './api-garments.service';

describe('ApiGarmentsService', () => {
  let service: ApiGarmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiGarmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
