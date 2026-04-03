import { Pipe, PipeTransform } from '@angular/core';
import { SettingsInterface } from '../../interfaces/settings-interface';

@Pipe({
  name: 'temperatureUnitConversion',
})
export class TemperatureUnitConversionPipe implements PipeTransform {
  transform(value: SettingsInterface['temperatureUnit']): string {
    if (value === 'celsius') {
      return '°C';
    } else if (value === 'fahrenheit') {
      return '°F';
    } else {
      return '';
    }
  }
}
