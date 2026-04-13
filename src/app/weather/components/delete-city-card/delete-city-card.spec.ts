import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCityCard } from './delete-city-card';

describe('DeleteCityCard', () => {
  let component: DeleteCityCard;
  let fixture: ComponentFixture<DeleteCityCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteCityCard],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteCityCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
