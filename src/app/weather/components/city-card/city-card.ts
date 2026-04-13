import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-city-card',
  imports: [NgOptimizedImage],
  templateUrl: './city-card.html',
  styleUrl: './city-card.scss',
})
export class CityCard {
  @Input() cityName?: string;
  @Input() countryCode?: string;
  @Input() isSelected: boolean = false;
  @Input() translateX: number = 0;

  @Output() cardTapped = new EventEmitter<void>();

  public onCitySelected() {
    if (this.cityName) {
      this.cardTapped.emit();
    }
  }
}
