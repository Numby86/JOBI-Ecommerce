import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarmentListComponent } from './garment-list.component';

describe('GarmentListComponent', () => {
  let component: GarmentListComponent;
  let fixture: ComponentFixture<GarmentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GarmentListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GarmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
