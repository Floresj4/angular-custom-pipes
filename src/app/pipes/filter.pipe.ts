import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if(value.length === 0 || filterString === undefined || filterString === '') {
      return value;
    }

    if(propName !== undefined) {
      propName = propName.toLowerCase();
    }

    const results = [];
    for(const item of value) {
      if(item[propName].toLowerCase() === filterString.toLowerCase()) {
        results.push(item);
      }
    }

    return results;
  }
}
