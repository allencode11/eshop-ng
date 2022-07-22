import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../types';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: Item[] = [];
  @Output() itemsCartEvent = new EventEmitter<Item>();

  constructor(private itemsService: ItemsService) {
    this.cart = this.itemsService.getCart();
  }

  ngOnInit(): void {
  }


}
