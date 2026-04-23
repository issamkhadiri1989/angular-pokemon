import { Component, Input, Output } from '@angular/core';
// import { required } from '@angular/forms/signals';
import { Evolution } from '../evolution/evolution';
import { POKEMON } from '../pokemon-list';
import { type Pokemon } from '../pokemon/pokemon.model';
import { Pill } from "../shared/pill/pill";
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-datasheet',
  imports: [Evolution, Pill, UpperCasePipe],
  templateUrl: './datasheet.html',
  styleUrl: './datasheet.css',
})
export class Datasheet {
  pokemonList = POKEMON;
  @Input({ required: true }) pokemon!: Pokemon;

  get nextEvolutions() {
    return (
      this.pokemon.next_evolution
        ?.map((p) => this.pokemonList.find((item) => item.num === p.num))
        .filter((p) => p !== undefined) ?? []
    );
  }

  get previousEvolutions() {
    return (
      this.pokemon.prev_evolution
        ?.map((p) => this.pokemonList.find((item) => item.num === p.num))
        .filter((p) => p !== undefined) ?? []
    );
  }
}
