import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Item } from '../types';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private options: string[] = ['list', 'grid'];
  private position: number = 0;

  @Output() positionEvent = new EventEmitter<number>();
  @Output() openCartEvent = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit(): void {
  }

  emitPosition(): void {
    this.positionEvent.emit(this.getPosition());
  }

  emitOpenCart(): void {
    this.openCartEvent.emit();
  }

  getOption(): string {
    return this.options[(this.position + 1) % 2];
  }

  getPosition(): number {
    return this.position;
  }

  switchPosition(): void {
    this.position = ( this.position + 1 ) % 2
    this.emitPosition();
    console.log(this.position, this.options[this.position])
  }

}
