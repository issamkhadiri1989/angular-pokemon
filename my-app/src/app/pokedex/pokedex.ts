import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../pokemon/pokemon';
import { POKEMON } from '../pokemon-list';
import { Datasheet } from '../datasheet/datasheet';
import { Search } from '../search/search';
import { type SearchPokemon } from '../search/search.model';
// import { NgFor, NgIf } from "@angular/common";
import { PokemonCatalog } from './pokedex.service';
import { FavoriteHandler } from './favorite.service';

@Component({
  selector: 'app-pokedex',
  imports: [Pokemon, Datasheet /* NgFor, NgIf */, Search],
  templateUrl: './pokedex.html',
  styleUrl: './pokedex.css',
})
export class Pokedex {
  pokemon = POKEMON;
  selectedPokemon?: number;
  isSearchingPokemon = false;

   @Output() close = new EventEmitter<void>();


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
    console.log("Closing dialog")
  }
}
