import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToysDiscountedDetailComponent } from './toys-discounted-detail.component';

describe('ToysDiscountedDetailComponent', () => {
  let component: ToysDiscountedDetailComponent;
  let fixture: ComponentFixture<ToysDiscountedDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToysDiscountedDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToysDiscountedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
