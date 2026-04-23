import { Injectable } from '@angular/core';
import { POKEMON } from '../pokemon-list';
import { EvolutionModel } from './evolution.model';

@Injectable({
  providedIn: 'root',
})
export class EvolutionHandler {
  pokemonList = POKEMON;

  findEvolutions(collection: EvolutionModel[]) {
    return (
      collection
        ?.map((p) => this.pokemonList.find((item) => item.num === p.num))
        .filter((p) => p !== undefined) ?? []
    );
  }
}
