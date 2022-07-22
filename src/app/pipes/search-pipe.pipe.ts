import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../types';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(value: Item[], str: string): Item[] {
    return value.filter(el => el.name.toLowerCase().includes(str.toLowerCase()))
  }

}
