import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
// import { required } from '@angular/forms/signals';
import { Evolution } from '../evolution/evolution';
import { POKEMON } from '../pokemon-list';
import { type Pokemon } from '../pokemon/pokemon.model';
import { Pill } from '../shared/pill/pill';
import { UpperCasePipe } from '@angular/common';
import { EvolutionHandler } from '../evolution/evolution.service';

@Component({
  selector: 'app-datasheet',
  imports: [Evolution, Pill, UpperCasePipe],
  templateUrl: './datasheet.html',
  styleUrl: './datasheet.css',
})
export class Datasheet {
  pokemonList = POKEMON;
  @Input({ required: true }) pokemon!: Pokemon;

  private evolutionHandler = inject(EvolutionHandler);

  @Output() close = new EventEmitter();

  get nextEvolutions() {
    return this.evolutionHandler.findEvolutions(this.pokemon.next_evolution!);
  }

  get previousEvolutions() {
    return this.evolutionHandler.findEvolutions(this.pokemon.prev_evolution!);
  }

  get typeClass() {
    return `type-` + this.pokemon.type;
  }

  get theme() {
    if (this.pokemon.type.length < 1) {
      return `theme-default`;
    }

    return `theme-`+this.pokemon.type[0].toLocaleLowerCase();
  }

    closeDialog() {
    this.close.emit();
    console.log("Closing dialog")
  }
}
