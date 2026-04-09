import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SettingsInterface } from '../../interfaces/settings-interface';
import { WeatherCodeConversionPipe } from '../../pipes/conversions/weather-code-conversion-pipe';
import { TemperatureUnitConversionPipe } from '../../pipes/conversions/temperature-unit-conversion-pipe';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-weather-card',
  imports: [TemperatureUnitConversionPipe, WeatherCodeConversionPipe, NgOptimizedImage],
  templateUrl: './weather-card.html',
  styleUrl: './weather-card.scss',
})
export class WeatherCard {
  @Input() currentTemperature?: number;
  @Input() feelsLikeTemperature?: number;
  @Input() cityName?: string;
  @Input() weatherCode: number = 0;
  @Input() isCitySaved: boolean = false;

  @Input() temperatureUnit: SettingsInterface['temperatureUnit'] = 'celsius';
  @Input() currentLanguage: SettingsInterface['language'] = 'fr';

  @Input() cityJustSaved: boolean = false;

  @Output() saveCityButton = new EventEmitter<void>();
  @Output() cardTapped = new EventEmitter<void>();

  public onCardTapped(): void {
    this.cardTapped.emit();
  }

  public onSaveCity(): void {
    this.saveCityButton.emit();
  }
}
