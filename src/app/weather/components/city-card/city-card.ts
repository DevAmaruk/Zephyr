import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GeocodingResult } from '../../interfaces/geocoding-interface';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-city-card',
  imports: [NgOptimizedImage],
  templateUrl: './city-card.html',
  styleUrl: './city-card.scss',
})
export class CityCard {
  @Input() city?: GeocodingResult;
  @Output() citySelected = new EventEmitter<GeocodingResult>();
}
