import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../types';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() items: Item[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
