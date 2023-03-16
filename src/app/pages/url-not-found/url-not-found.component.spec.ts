import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlNotFoundComponent } from './url-not-found.component';

describe('UrlNotFoundComponent', () => {
  let component: UrlNotFoundComponent;
  let fixture: ComponentFixture<UrlNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlNotFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
