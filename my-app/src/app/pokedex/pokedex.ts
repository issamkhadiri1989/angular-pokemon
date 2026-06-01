import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { Pokemon } from '../pokemon/pokemon';
import { POKEMON } from '../pokemon-list';
import { Datasheet } from '../datasheet/datasheet';
import { Search } from '../search/search';
import { type SearchPokemon } from '../search/search.model';
// import { NgFor, NgIf } from "@angular/common";
import { PokemonCatalog } from './pokedex.service';
import { FavoriteHandler } from './favorite.service';
import { Control } from '../shared/control/control';
import { Whishlist } from '../whishlist/whishlist';
import { MyList } from '../whishlist/list.model';
import { ListItem } from '../list-item/list-item';
import { Carousel } from '../carousel/carousel';

@Component({
  selector: 'app-pokedex',
  imports: [Pokemon, Datasheet /* NgFor, NgIf */, Search, Control, Whishlist, ListItem, Carousel],
  templateUrl: './pokedex.html',
  styleUrl: './pokedex.css',
})
export class Pokedex {
  pokemon = POKEMON;
  selectedPokemon?: number;
  isSearchingPokemon = false;

  lists: MyList[] = [];

  @Output() close = new EventEmitter<void>();

  private favoritManager = inject(FavoriteHandler);

  constructor(
    private catalogManager: PokemonCatalog,
    private favoriteHandler: FavoriteHandler,
  ) {}

  get fetchedPokemon() {
    return this.catalogManager.getPokemonByItsId(this.selectedPokemon);
  }

  onSelectPokemon(id: number) {
    this.selectedPokemon = id;
  }

  onFavoriteEvent(id: number) {
    this.favoriteHandler.toggleFavorite(id);
  }

  isFavorite(id: number): boolean {
    return this.favoriteHandler.isFavorite(id);
  }

  onStartSearch() {
    this.isSearchingPokemon = true;
  }

  onCancelSearch() {
    this.isSearchingPokemon = false;
  }

  find(search: SearchPokemon) {
    this.pokemon = this.catalogManager.findPokemons(search);
    this.isSearchingPokemon = false;
  }

  closeDatasheet() {
    this.selectedPokemon = undefined;
  }

  onAddList(name: string) {
    const list: MyList = {
      name: name,
      pokemons: [],
      status: 'inactive',
    };
    console.log('😅 List added: ', list);

    this.lists.push(list);
  }

  refreshingList(name: string) {
    console.log('😅 Activating squad: ', name);
    // this is just for demonstration and can be removed if we use a more reactive approach in the parent component
    this.lists = this.lists.map((list) => {
      if (list.name === name) {
        return {
          ...list,
          status: 'active',
        };
      } else {
        return {
          ...list,
          status: 'inactive',
        };
      }
    });
  }


  onDropFavorite(id: number) {
    this.favoritManager.toggleFavorite(id);
  }
}
