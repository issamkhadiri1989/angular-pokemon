import { Injectable } from '@angular/core';
import { POKEMON } from '../pokemon-list';

@Injectable({ providedIn: 'root' })
export class FavoriteHandler {
  private favoriteList?: number[] = [];
  private pokemon = POKEMON;

  isFavorite(id: number) {
    return this.favoriteList?.includes(id) ?? false;
  }

  toggleFavorite(id: number) {
    if (this.isFavorite(id)) {
      this.favoriteList = this.favoriteList?.filter((f) => f !== id);
    } else {
      this.favoriteList?.push(id);
    }
  }
}
