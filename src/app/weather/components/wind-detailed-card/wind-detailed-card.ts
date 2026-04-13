import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wind-detailed-card',
  imports: [],
  templateUrl: './wind-detailed-card.html',
  styleUrl: './wind-detailed-card.scss',
})
export class WindDetailedCard {
  @Input() icon?: string;
  @Input() symbol?: string;
  @Input() value?: number;
  @Input() unit?: string;
}
