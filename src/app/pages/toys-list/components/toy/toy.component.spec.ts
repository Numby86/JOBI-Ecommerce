import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToyComponent } from './toy.component';

describe('ToyComponent', () => {
  let component: ToyComponent;
  let fixture: ComponentFixture<ToyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
