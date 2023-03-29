import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToysDiscountedListComponent } from './toys-discounted-list.component';

describe('ToysDiscountedListComponent', () => {
  let component: ToysDiscountedListComponent;
  let fixture: ComponentFixture<ToysDiscountedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToysDiscountedListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToysDiscountedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
