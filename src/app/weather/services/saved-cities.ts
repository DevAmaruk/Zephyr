import { Injectable } from '@angular/core';
import { SavedCitiesInterface } from '../interfaces/saved-cities-interface';

@Injectable({
  providedIn: 'root',
})
export class SavedCities {
  public getAll(): SavedCitiesInterface[] {
    const savedCities = localStorage.getItem('savedCities');
    return savedCities ? JSON.parse(savedCities) : [];
  }

  public save(city: SavedCitiesInterface): void {
    const savedCities = this.getAll();
    if (savedCities.some((c) => c.name === city.name && c.country === city.country)) {
      return; // City already saved, do not add again
    }

    savedCities.push(city);
    localStorage.setItem('savedCities', JSON.stringify(savedCities));
  }

  public delete(city: SavedCitiesInterface): void {
    const savedCities = this.getAll();
    const updatedCities = savedCities.filter(
      (c) => c.name != city.name && c.country != city.country,
    );
    localStorage.setItem('savedCities', JSON.stringify(updatedCities));
  }
}
