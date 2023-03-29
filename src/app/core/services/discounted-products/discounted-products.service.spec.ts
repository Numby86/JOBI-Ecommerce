import { TestBed } from '@angular/core/testing';

import { DiscountedProductsService } from './discounted-products.service';

describe('DiscountedProductsService', () => {
  let service: DiscountedProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscountedProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
