import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberTravelersComponent } from './number-travelers.component';

describe('NumberTravelersComponent', () => {
  let component: NumberTravelersComponent;
  let fixture: ComponentFixture<NumberTravelersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberTravelersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberTravelersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
