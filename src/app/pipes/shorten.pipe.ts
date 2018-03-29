import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  defaultLength = 30;

  transform(value: any, limit: number) {
    const length = value !== undefined
      ? value.length : 0;

    limit = limit === undefined
      ? this.defaultLength : limit;

    return length > limit
      ? value.substr(0, limit) + '...'
        : value;
  }
}
