import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { Geocoding } from '../../services/geocoding';
import { Settings } from '../../services/settings';
import { GeocodingInterface, GeocodingResult } from '../../interfaces/geocoding-interface';
import { SavedCitiesInterface } from '../../interfaces/saved-cities-interface';
import { SettingsInterface } from '../../interfaces/settings-interface';
import { CityCard } from '../../components/city-card/city-card';

@Component({
  selector: 'app-search-page',
  imports: [AsyncPipe, NgOptimizedImage, CityCard],
  templateUrl: './search-page.html',
  styleUrl: './search-page.scss',
})
export class SearchPage implements OnInit {
  /*
    This page is responsible for searching a location by its name and uses the autocomplete from Open-Meteo to display suggestions as the user types. 
    It will inject the Geocoding Service to fetch the coordinates of the selected location.
    It will pass the coordinates, the name and country properties from the Geocoding results to the Homepage component through the URL.
  */

  private readonly geocodingService = inject(Geocoding);
  private readonly _router = inject(Router);
  private readonly settingsService = inject(Settings);

  private readonly searchQuery$ = new Subject<string>();
  protected geocodingData$?: Observable<GeocodingInterface>;
  protected selectedCity?: SavedCitiesInterface;

  settings: SettingsInterface = this.settingsService.getSettings();

  ngOnInit() {
    this.geocodingData$ = this.searchQuery$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((cityName) =>
        this.geocodingService.getCoordinates(cityName, this.settings.language),
      ),
    );
  }

  public onSelectCity(city: GeocodingResult) {
    this.selectedCity = {
      id: city.id,
      name: city.name,
      country: city.country,
      country_code: city.country_code,
      lat: city.latitude,
      lon: city.longitude,
    };
  }

  public onInputChange(query: string) {
    this.searchQuery$.next(query);
  }

  public onGetWeather() {
    if (this.selectedCity) {
      this._router.navigate(['/home'], { queryParams: { ...this.selectedCity } });
    }
  }

  public onBackToHomepage() {
    globalThis.history.back();
  }
}
