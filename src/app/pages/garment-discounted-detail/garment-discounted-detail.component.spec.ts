import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarmentDiscountedDetailComponent } from './garment-discounted-detail.component';

describe('GarmentDiscountedDetailComponent', () => {
  let component: GarmentDiscountedDetailComponent;
  let fixture: ComponentFixture<GarmentDiscountedDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GarmentDiscountedDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GarmentDiscountedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
