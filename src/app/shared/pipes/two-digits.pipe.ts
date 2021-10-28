import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'twoDigits'
})
export class TwoDigitsPipe implements PipeTransform {

  transform(input: number): string {
    if (!input) {
      return '00';
    }
    if (input < 10) {
      return `0${input}`;
    }
    return `${input}`;
  }

}
