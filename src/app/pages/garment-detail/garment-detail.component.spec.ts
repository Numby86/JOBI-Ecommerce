import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarmentDetailComponent } from './garment-detail.component';

describe('GarmentDetailComponent', () => {
  let component: GarmentDetailComponent;
  let fixture: ComponentFixture<GarmentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GarmentDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GarmentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
