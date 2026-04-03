import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'windDirectionConversion',
})
export class WindDirectionConversionPipe implements PipeTransform {
  transform(value: number): string {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const index = Math.round((value % 360) / 45) % 8;
    return directions[index];
  }
}
