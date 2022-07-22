import { Component } from '@angular/core';
import { Item } from './types';
import { ItemsService } from './services/items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'shopList';
  Items: Item[] = [];
  cart: Item[] = [];
  position: number = 0;
  openCart: boolean = false;

  changePosition(vl: number): void {
    this.position = vl;
  }

  constructor(private itemsService: ItemsService) {
    this.Items = this.itemsService.getItems();
    this.cart = this.itemsService.getCart();
  }

  switchOpenCart(): void {
    this.openCart = !this.openCart;
  }

  addToCart(item: Item): void {
    this.cart = this.itemsService.changeItems(item, this.cart);
    console.log(this.cart, 'cart from app component')
    // console.log(this.cart(item, this.cart), 'response in app component')
  }

  sortItems(str: string) {
    this.Items = this.itemsService.sortItems(str);
    console.log(this.Items);
  }

  searchItems(str: string) {
    this.Items = this.itemsService.searchItems(str);
    console.log(this.Items)
  }
}
