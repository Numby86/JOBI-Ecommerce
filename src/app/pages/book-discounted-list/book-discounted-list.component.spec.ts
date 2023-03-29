import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDiscountedListComponent } from './book-discounted-list.component';

describe('BookDiscountedListComponent', () => {
  let component: BookDiscountedListComponent;
  let fixture: ComponentFixture<BookDiscountedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookDiscountedListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookDiscountedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
