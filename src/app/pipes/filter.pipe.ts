import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    // ensure the value or filter string is valid
    if(value.length === 0 || this.isFilterValid(filterString)) {
      return value;
    }

    // adjust the case for property lookuip
    if(propName !== undefined) {
      propName = propName.toLowerCase();
    }

    const results = [];
    for(const item of value) {
      // use a contains approach to filter
      if(item[propName].toLowerCase().indexOf(filterString.toLowerCase()) > -1) {
        results.push(item);
      }
    }

    return results;
  }

  isFilterValid(filterString: string) {
    return filterString === undefined || filterString === '';
  }
}
