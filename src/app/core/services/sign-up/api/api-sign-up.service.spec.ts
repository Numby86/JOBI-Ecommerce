import { TestBed } from '@angular/core/testing';

import { ApiSignUpService } from './api-sign-up.service';

describe('ApiSignUpService', () => {
  let service: ApiSignUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSignUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
