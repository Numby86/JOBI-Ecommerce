import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDiscountedListComponent } from './product-discounted-list.component';

describe('ProductDiscountedListComponent', () => {
  let component: ProductDiscountedListComponent;
  let fixture: ComponentFixture<ProductDiscountedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDiscountedListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDiscountedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
