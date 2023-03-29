import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDiscountedDetailComponent } from './product-discounted-detail.component';

describe('ProductDiscountedDetailComponent', () => {
  let component: ProductDiscountedDetailComponent;
  let fixture: ComponentFixture<ProductDiscountedDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDiscountedDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDiscountedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
