import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindDetailedCard } from './wind-detailed-card';

describe('WindDetailedCard', () => {
  let component: WindDetailedCard;
  let fixture: ComponentFixture<WindDetailedCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WindDetailedCard],
    }).compileComponents();

    fixture = TestBed.createComponent(WindDetailedCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
