import { TestBed } from '@angular/core/testing';

import { ApiDiscountedProductsService } from './api-discounted-products.service';

describe('ApiDiscountedProductsService', () => {
  let service: ApiDiscountedProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDiscountedProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
