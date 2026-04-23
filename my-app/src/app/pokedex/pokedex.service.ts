import { Injectable } from '@angular/core';
import { POKEMON } from '../pokemon-list';
import { SearchPokemon } from '../search/search.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonCatalog {
  private pokemonList = POKEMON;

  getPokemonByItsId(id?: number) {
    return this.pokemonList.find((item) => item.id === id)!;
  }

  findPokemons(search: SearchPokemon) {
    return (
      this.pokemonList.filter((item) =>
        item.name.toLocaleLowerCase().includes(search.term.toLocaleLowerCase()),
      ) ?? []
    );
  }
}
