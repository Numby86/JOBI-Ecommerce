import { TestBed } from '@angular/core/testing';

import { ApiVideogamesService } from './api-videogames.service';

describe('ApiVideogamesService', () => {
  let service: ApiVideogamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiVideogamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
