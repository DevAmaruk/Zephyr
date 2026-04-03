import { TestBed } from '@angular/core/testing';

import { SavedCities } from './saved-cities';

describe('SavedCities', () => {
  let service: SavedCities;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavedCities);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
