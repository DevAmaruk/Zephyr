import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weatherIconsConversion',
})
export class WeatherIconsConversionPipe implements PipeTransform {
  transform(value: number): string {
    // Example conversion logic, replace with actual mapping
    const weatherIconsMap: { [key: number]: string } = {
      0: 'weather-icons/2.svg',
      1: 'weather-icons/2.svg',
      2: 'weather-icons/8.svg',
      3: 'weather-icons/14.svg',
      45: 'weather-icons/12.svg',
      48: 'weather-icons/12.svg',
      51: 'weather-icons/20.svg',
      53: 'weather-icons/20.svg',
      55: 'weather-icons/20.svg',
      56: 'weather-icons/20.svg',
      57: 'weather-icons/20.svg',
      61: 'weather-icons/17.svg',
      63: 'weather-icons/18.svg',
      65: 'weather-icons/18.svg',
      66: 'weather-icons/24.svg',
      67: 'weather-icons/24.svg',
      71: 'weather-icons/21.svg',
      73: 'weather-icons/22.svg',
      75: 'weather-icons/22.svg',
      77: 'weather-icons/21.svg',
      80: 'weather-icons/17.svg',
      81: 'weather-icons/18.svg',
      82: 'weather-icons/26.svg',
      85: 'weather-icons/21.svg',
      86: 'weather-icons/22.svg',
      95: 'weather-icons/16.svg',
      96: 'weather-icons/26.svg',
      99: 'weather-icons/27.svg',
    };
    return weatherIconsMap[value] ?? 'weather-icons/45.svg';
  }
}
