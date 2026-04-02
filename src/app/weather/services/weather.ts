import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherInterface } from '../interfaces/weather-interface';
import { SettingsInterface } from '../interfaces/settings-interface';

@Injectable({
  providedIn: 'root',
})
export class Weather {
  private readonly http = inject(HttpClient);

  private readonly apiUrl = 'https://api.open-meteo.com/v1/forecast';

  public getWeather(
    latitude: number,
    longitude: number,
    temperatureUnit: SettingsInterface['temperatureUnit'],
    windSpeedUnit: SettingsInterface['windSpeedUnit'],
    precipitationUnit: SettingsInterface['precipitationUnit'],
  ): Observable<WeatherInterface> {
    return this.http.get<WeatherInterface>(
      `${this.apiUrl}?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min,sunset,sunrise,sunshine_duration,uv_index_max,precipitation_sum&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,weather_code&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,pressure_msl,wind_speed_10m,wind_direction_10m&timezone=auto&wind_speed_unit=${windSpeedUnit}&temperature_unit=${temperatureUnit}&precipitation_unit=${precipitationUnit}`,
    );
  }
}
