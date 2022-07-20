import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../types';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() elem: Item = { description: '', name: '', image: '', price: 0 };
  @Input() index: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
