import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../types';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Item[], str: string): any {
    if (str === 'asc') {
      console.log(value.sort((a, b) => { return a.price - b.price }), ' sort ', 'asc')
      return value.sort((a, b) => { return a.price - b.price })
    }
    else {
      console.log(value.sort((a, b) => { return b.price - a.price }), ' sort ', 'dsc')
      return value.sort((a, b) => { return b.price - a.price })
    }
  }

}
