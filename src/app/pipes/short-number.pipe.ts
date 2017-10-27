import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortNumber'
})
export class ShortNumberPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let abs;
    let converted;
    if (value) {
      abs = Math.abs(value);
      if (abs >= Math.pow(10, 12)) {
        // trillion
        converted = (value / Math.pow(10, 12)).toFixed(1) + "T";
      } else if (abs < Math.pow(10, 12) && abs >= Math.pow(10, 9)) {
        // billion
        converted = (value / Math.pow(10, 9)).toFixed(1) + "B";
      } else if (abs < Math.pow(10, 9) && abs >= Math.pow(10, 6)) {
        // million
        converted = (value / Math.pow(10, 6)).toFixed(1) + "M";
      } else if (abs < Math.pow(10, 6) && abs >= Math.pow(10, 3)) {
        // thousand
        converted = (value / Math.pow(10, 3)).toFixed(1) + "K";
      } else if (abs < Math.pow(10, 3) && abs >= Math.pow(10, 0)) {
        // thousand
        converted = (value / Math.pow(10, 0)).toFixed(1);
      }
      return converted;
    }
  }
}
