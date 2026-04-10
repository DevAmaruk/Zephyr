import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SavedCities } from '../../services/saved-cities';
import { SavedCitiesInterface } from '../../interfaces/saved-cities-interface';
import { CityCard } from '../../components/city-card/city-card';
import { DeleteCityCard } from '../../components/delete-city-card/delete-city-card';

@Component({
  selector: 'app-saved-cities-page',
  imports: [CityCard, DeleteCityCard],
  templateUrl: './saved-cities-page.html',
  styleUrl: './saved-cities-page.scss',
})
export class SavedCitiesPage {
  private readonly _router = inject(Router);
  private readonly savedCities = inject(SavedCities);

  protected savedCitiesObject: SavedCitiesInterface[] = this.savedCities.getAll();

  protected swipedCityID?: number;
  private startX: number = 0;
  protected currentTranslateX: number = 0;

  protected selectedCity?: SavedCitiesInterface;

  protected savedCitiesList: SavedCitiesInterface[] = this.savedCities.getAll();

  public onTouchStart(event: TouchEvent, cityId: number) {
    this.swipedCityID = cityId;
    this.startX = event.touches[0].clientX;
  }

  public onTouchMove(event: TouchEvent) {
    if (this.swipedCityID !== undefined) {
      const currentX = event.touches[0].clientX;
      this.currentTranslateX = Math.min(0, currentX - this.startX);
    }
  }

  public onTouchEnd(event: TouchEvent, city: SavedCitiesInterface) {
    const cardWidth = (event.currentTarget as HTMLElement).offsetWidth;
    const threshold = cardWidth * 0.7;

    if (Math.abs(this.currentTranslateX) >= threshold) {
      this.savedCities.delete(city);
      this.savedCitiesList = this.savedCities.getAll(); // refresh the list
      this.currentTranslateX = 0;
      this.swipedCityID = undefined;
    } else {
      // snap back
      this.currentTranslateX = 0;
      this.swipedCityID = undefined;
    }
  }

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
