import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TemperatureUnitConversionPipe } from '../../pipes/conversions/temperature-unit-conversion-pipe';
import { WeatherInterface } from '../../interfaces/weather-interface';
import { SettingsInterface } from '../../interfaces/settings-interface';
import { WeatherIconsConversionPipe } from '../../pipes/conversions/weather-icons-conversion-pipe';
import { WindDirectionConversionPipe } from '../../pipes/conversions/wind-direction-conversion-pipe';
import { RoundNumberPipe } from '../../pipes/round-number-pipe';

@Component({
  selector: 'app-detailed-page',
  imports: [
    WindDirectionConversionPipe,
    RoundNumberPipe,
    DatePipe,
    WeatherIconsConversionPipe,
    TemperatureUnitConversionPipe,
  ],
  templateUrl: './detailed-page.html',
  styleUrl: './detailed-page.scss',
})
export class DetailedPage implements OnInit {
  protected weatherData?: WeatherInterface;
  protected settings?: SettingsInterface;

  ngOnInit() {
    this.weatherData = history.state['weatherData'];
    this.settings = history.state['settings'];
  }

  public onBackToHomepage() {
    globalThis.history.back();
  }
}
