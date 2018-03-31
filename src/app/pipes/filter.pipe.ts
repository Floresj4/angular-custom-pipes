import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {

    if(value.length === 0 || filterString === '') {
      return value;
    }

    if(propName !== undefined) {
      propName = propName.toLowerCase();
    }

    const results = [];
    for(const item of value) {
      console.log(filterString + ' : ' + propName + ' : ' + JSON.stringify(value));
      if(item[propName] === filterString) {
        results.push(item);
      }
    }

    return results;
  }
}
