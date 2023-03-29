import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideogameDiscountedListComponent } from './videogame-discounted-list.component';

describe('VideogameDiscountedListComponent', () => {
  let component: VideogameDiscountedListComponent;
  let fixture: ComponentFixture<VideogameDiscountedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideogameDiscountedListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideogameDiscountedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
