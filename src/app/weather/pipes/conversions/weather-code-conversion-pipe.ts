import { Pipe, PipeTransform } from '@angular/core';

import { WeatherInterface } from '../../interfaces/weather-interface';
import { SettingsInterface } from '../../interfaces/settings-interface';
import { WEATHER_CODE_DESCRIPTIONS } from '../../constants/weather-code-description';

@Pipe({
  name: 'weatherCodeConversion',
})
export class WeatherCodeConversionPipe implements PipeTransform {
  transform(
    value: WeatherInterface['current']['weather_code'],
    settings: SettingsInterface['language'],
  ): string {
    return WEATHER_CODE_DESCRIPTIONS[value][settings];
  }
}
