import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SavedCities } from '../../services/saved-cities';
import { SavedCitiesInterface } from '../../interfaces/saved-cities-interface';

@Component({
  selector: 'app-saved-cities-page',
  imports: [],
  templateUrl: './saved-cities-page.html',
  styleUrl: './saved-cities.scss',
})
export class SavedCitiesPage {
  private readonly _router = inject(Router);
  private readonly savedCities = inject(SavedCities);

  protected selectedCity?: SavedCitiesInterface;

  protected savedCitiesList: SavedCitiesInterface[] = this.savedCities.getAll();

  public onSelectCity(city: SavedCitiesInterface) {
    this.selectedCity = city;
    this.onGetWeather();
  }

  public onGetWeather() {
    if (this.selectedCity) {
      this._router.navigate(['/home'], { queryParams: { ...this.selectedCity } });
    }
  }

  public onDeleteCity(city: SavedCitiesInterface) {
    this.savedCities.delete(city);
    this.savedCitiesList = this.savedCities.getAll();
  }

  public backToHomepage() {
    this._router.navigate(['/home']);
  }
}
