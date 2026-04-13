import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-details-card',
  imports: [],
  templateUrl: './weather-details-card.html',
  styleUrl: './weather-details-card.scss',
})
export class WeatherDetailsCard {
  @Input() icon?: string;
  @Input() value?: number;
  @Input() unit?: string;
}
