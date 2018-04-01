import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    // ensure the value or filter string is valid
    if(value.length === 0 || this.isFilterValid(filterString)) {
      return value;
    }

    // adjust the case for property lookup
    if(propName !== undefined) {
      propName = propName.toLowerCase();
    }

    if(filterString !== undefined) {
      filterString = filterString.toLowerCase();
    }

    const results = [];
    for(const item of value) {

      // compare values as strings for simplicity
      const itemValue = item[propName].toString()
        .toLowerCase();

      // use a contains approach to filter
      if(itemValue.indexOf(filterString) > -1) {
        results.push(item);
      }
    }

    return results;
  }

  isFilterValid(filterString: string) {
    return filterString === undefined || filterString === '';
  }
}
