import { Component, inject, OnInit } from '@angular/core';
import { Weather } from '../../services/weather';
import { Settings } from '../../services/settings';
import { SettingsInterface } from '../../interfaces/settings-interface';
import { filter, Observable, switchMap, tap } from 'rxjs';
import { WeatherInterface } from '../../interfaces/weather-interface';
import { WeatherCard } from '../../components/weather-card/weather-card';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { SavedCitiesInterface } from '../../interfaces/saved-cities-interface';
import { SavedCities } from '../../services/saved-cities';

@Component({
  selector: 'app-homepage',
  imports: [WeatherCard, AsyncPipe],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})
export class Homepage implements OnInit {
  private readonly weatherService = inject(Weather);
  private readonly settingsService = inject(Settings);
  private readonly savedCitiesService = inject(SavedCities);
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _router = inject(Router);

  protected currentCity?: SavedCitiesInterface;

  protected weatherData$?: Observable<WeatherInterface>;
  protected currentWeather?: WeatherInterface;

  protected settings: SettingsInterface = this.settingsService.getSettings();

  ngOnInit() {
    this.weatherData$ = this._activatedRoute.queryParams.pipe(
      filter((params) => params['lat'] && params['lon']),
      tap((params) => {
        this.currentCity = {
          name: params['name'],
          lat: params['lat'],
          lon: params['lon'],
          country: params['country'],
        };
      }),
      switchMap((params) =>
        this.weatherService.getWeather(
          params['lat'],
          params['lon'],
          this.settings.temperatureUnit,
          this.settings.windSpeedUnit,
          this.settings.precipitationUnit,
        ),
      ),
      tap((weatherData) => {
        this.currentWeather = weatherData;
      }),
    );
  }

  public onSearchCity() {
    this._router.navigate(['/search']);
  }

  public onSettings() {
    this._router.navigate(['/settings']);
  }

  public onSaveCity() {
    if (this.currentCity) {
      this.savedCitiesService.save(this.currentCity);
    }
  }

  public onSavedCitiesList() {
    this._router.navigate(['/saved-cities']);
  }

  public onCardTapped() {
    this._router.navigate(['/detailed-weather'], {
      state: {
        weatherData: this.currentWeather,
        settings: this.settings,
      },
    });
  }
}
