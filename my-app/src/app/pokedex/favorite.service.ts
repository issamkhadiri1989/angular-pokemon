import { Injectable } from '@angular/core';
import { POKEMON } from '../pokemon-list';

@Injectable({ providedIn: 'root' })
export class FavoriteHandler {
  private favoriteList?: number[] = [];
  private pokemon = POKEMON;

  constructor() {
    const favoriteList = localStorage.getItem('favorite'); // always be a string
    if (favoriteList) {
      this.favoriteList = JSON.parse(favoriteList); // should parse it as a json object
    }
  }

  isFavorite(id: number) {
    return this.favoriteList?.includes(id) ?? false;
  }

  toggleFavorite(id: number) {
    if (this.isFavorite(id)) {
      this.favoriteList = this.favoriteList?.filter((f) => f !== id);
    } else {
      this.favoriteList?.push(id);
    }
    this.saveFavorite(); // update the localStorage
  }

  getFavoriteList() {
    return this.favoriteList?.map(item => this.pokemon.find(i => i.id  === item))!;
  }

  private saveFavorite() {
    localStorage.setItem('favorite', JSON.stringify(this.favoriteList));
  }
}
