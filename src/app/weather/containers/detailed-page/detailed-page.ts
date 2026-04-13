import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TemperatureUnitConversionPipe } from '../../pipes/conversions/temperature-unit-conversion-pipe';
import { WeatherInterface } from '../../interfaces/weather-interface';
import { SettingsInterface } from '../../interfaces/settings-interface';
import { WeatherIconsConversionPipe } from '../../pipes/conversions/weather-icons-conversion-pipe';
import { WindDirectionConversionPipe } from '../../pipes/conversions/wind-direction-conversion-pipe';
import { RoundNumberPipe } from '../../pipes/round-number-pipe';
import { WeatherDetailsCard } from '../../components/weather-details-card/weather-details-card';
import { WindDetailedCard } from '../../components/wind-detailed-card/wind-detailed-card';

@Component({
  selector: 'app-detailed-page',
  imports: [
    WindDirectionConversionPipe,
    RoundNumberPipe,
    DatePipe,
    WeatherIconsConversionPipe,
    TemperatureUnitConversionPipe,
    WeatherDetailsCard,
    WindDetailedCard,
  ],
  templateUrl: './detailed-page.html',
  styleUrl: './detailed-page.scss',
})
export class DetailedPage implements OnInit {
  protected weatherData?: WeatherInterface;
  protected settings?: SettingsInterface;

  protected currentCityName?: string;

  protected currentHourIndex: number = 0;

  ngOnInit() {
    this.weatherData = history.state['weatherData'];
    this.settings = history.state['settings'];
    this.currentCityName = history.state['currentCity'].name;

    if (this.weatherData) {
      const now = new Date();
      const currentHour = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}T${String(now.getHours()).padStart(2, '0')}`;
      this.currentHourIndex = this.weatherData.hourly.time.findIndex((time) =>
        time.startsWith(currentHour),
      );
    }
  }

  public onBackToHomepage() {
    globalThis.history.back();
  }
}
