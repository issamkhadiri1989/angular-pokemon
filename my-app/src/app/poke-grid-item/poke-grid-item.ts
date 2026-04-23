import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WishlistHelper } from '../whishlist/whishlist.service';

@Component({
  selector: 'app-poke-grid-item',
  imports: [],
  templateUrl: './poke-grid-item.html',
  styleUrl: './poke-grid-item.css',
})
export class PokeGridItem {
  @Input({ required: true }) name!: string;

  @Output() remove = new EventEmitter<string>();

  constructor(private whishlistHelper: WishlistHelper) {}

  getCount(listName: string): number {
    return this.whishlistHelper.getCount(listName);
  }

  removeList(name: string) {
    this.remove.emit(name);
  }
}
