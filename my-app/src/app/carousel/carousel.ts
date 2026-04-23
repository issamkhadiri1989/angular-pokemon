import { Component, EventEmitter, inject, Output } from '@angular/core';
import { POKEMON } from '../pokemon-list';
import { FavoriteHandler } from '../pokedex/favorite.service';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel {
  pokemonList = POKEMON;

  @Output() drop = new EventEmitter<number>();

  private favorite = inject(FavoriteHandler);

  get favoriteList() {
    return this.favorite.getFavoriteList();
  }

  removeFavorite(id: number) {
    this.drop.emit(id);
  }
}
