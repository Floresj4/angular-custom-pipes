import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  defaultLength = 30;

  transform(value: any, ...args: any[]) {
    const length = value !== undefined
      ? value.length : 0;

    return length > this.defaultLength
      ? value.substr(0, this.defaultLength) + '...'
        : value;
  }
}
