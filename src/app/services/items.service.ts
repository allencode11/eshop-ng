import { Injectable } from '@angular/core';
import { Items } from '../data';
import { Item } from '../types';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private Items: Item[] = Items;
  private Cart: Item[] = [];

  constructor() { }

  getItems(): Item[] {
    return this.Items;
  }

  getCart(): Item[] {
    return this.Cart;
  }

  // add the item to the items if it is not in the array else delete it from the array
  changeItems(item: Item, itemArr: Item[]): Item[] {
    const index = itemArr.findIndex(el => el.description === item.description && el.name === item.name);

    if(index === -1) {
      itemArr.push(item);
      console.log(itemArr, 'add')
      return itemArr;
    } else {
      itemArr.splice(index, 1)
      console.log(itemArr, 'remove')
      return itemArr;
    }
  }

  sortItems(str: string): Item[] {
    if (str === 'asc') {
      console.log(this.Items.sort((a, b) => { return a.price - b.price }), ' sort ', 'asc')
      return this.Items.sort((a, b) => { return a.price - b.price })
    }
    else {
      console.log(this.Items.sort((a, b) => { return b.price - a.price }), ' sort ', 'dsc')
      return this.Items.sort((a, b) => { return b.price - a.price })
    }
  }

  searchItems(str: string): Item[] {
    return this.Items.filter(el => el.name.toLowerCase().includes(str.toLowerCase()))
  }
}
