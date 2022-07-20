import { Component } from '@angular/core';
import { Items } from './data';
import { Item } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'shopList';
  Items: Item[] = Items;
  cart: Item[] = [this.Items[0]];
  position: number = 0;
  openCart: boolean = false;

  changePosition(vl: number): void {
    this.position = vl;
  }

  switchOpenCart(): void {
    this.openCart = !this.openCart;
  }

  addToCart(item: Item): void {
    const index = this.cart.findIndex(el => el.description === item.description && el.name === item.name);
    if(index === -1) {
      this.cart.push(item);
      console.log(this.cart, true)
    } else {
      this.cart = this.cart.filter((el, ind) => ind !== index)
      console.log(this.cart, false)
    }
  }
}
