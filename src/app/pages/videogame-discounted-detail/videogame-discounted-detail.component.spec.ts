import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideogameDiscountedDetailComponent } from './videogame-discounted-detail.component';

describe('VideogameDiscountedDetailComponent', () => {
  let component: VideogameDiscountedDetailComponent;
  let fixture: ComponentFixture<VideogameDiscountedDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideogameDiscountedDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideogameDiscountedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
