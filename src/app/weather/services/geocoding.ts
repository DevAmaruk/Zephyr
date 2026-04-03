import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeocodingInterface } from '../interfaces/geocoding-interface';
import { SettingsInterface } from '../interfaces/settings-interface';

@Injectable({
  providedIn: 'root',
})
export class Geocoding {
  private readonly http = inject(HttpClient);

  private readonly apiUrl = 'https://geocoding-api.open-meteo.com/v1/search';

  public getCoordinates(
    cityName: string,
    language: SettingsInterface['language'],
  ): Observable<GeocodingInterface> {
    return this.http.get<GeocodingInterface>(
      `${this.apiUrl}?name=${cityName}&count=50&language=${language}&format=json`,
    );
  }
}
