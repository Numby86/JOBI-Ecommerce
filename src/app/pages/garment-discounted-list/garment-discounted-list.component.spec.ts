import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarmentDiscountedListComponent } from './garment-discounted-list.component';

describe('GarmentDiscountedListComponent', () => {
  let component: GarmentDiscountedListComponent;
  let fixture: ComponentFixture<GarmentDiscountedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GarmentDiscountedListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GarmentDiscountedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
