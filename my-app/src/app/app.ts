import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';

import { Pokedex } from "./pokedex/pokedex";
import { Carousel } from "./carousel/carousel";
import { FavoriteHandler } from './pokedex/favorite.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Pokedex, Carousel],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');

  private favoritManager = inject(FavoriteHandler)

  onDropFavorite(id: number) {
      this.favoritManager.toggleFavorite(id);
  }
}
