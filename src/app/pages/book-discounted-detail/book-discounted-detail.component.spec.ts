import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDiscountedDetailComponent } from './book-discounted-detail.component';

describe('BookDiscountedDetailComponent', () => {
  let component: BookDiscountedDetailComponent;
  let fixture: ComponentFixture<BookDiscountedDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookDiscountedDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookDiscountedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
