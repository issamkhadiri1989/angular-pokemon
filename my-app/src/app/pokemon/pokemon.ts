import {
  Component,
  computed,
  Input,
  signal,
  input,
  Output,
  EventEmitter,
  output,
} from '@angular/core';
import { POKEMON, TYPES } from '../pokemon-list';

/* type PokemonCharacter = {
    id: number;
    num: string;
    name: string;
    img: string;
    type: string[];
    height: string;
    weight: string;
    weaknesses: string[];
    prev_evolution?: { num: string; name: string }[];
    next_evolution?: { num: string; name: string }[];
  }
 */

interface PokemonCharacter {
  id: number;
  num: string;
  name: string;
  img: string;
  type: string[];
  height: string;
  weight: string;
  weaknesses: string[];
  prev_evolution?: { num: string; name: string }[];
  next_evolution?: { num: string; name: string }[];
}

@Component({
  selector: 'app-pokemon',
  imports: [],
  templateUrl: './pokemon.html',
  styleUrl: './pokemon.css',
})
export class Pokemon {
  // @Input({ required: true }) num!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // @Input({ required: true }) id!: number;
  // @Input({ required: true }) types!: string[];

  @Input({ required: true }) monster!: PokemonCharacter;
  @Input({ required: true }) selected!: boolean;
  @Input() isFavorite ?: boolean = false;

  @Output() select = new EventEmitter<number>();
  @Output() favorite = new EventEmitter<number>();
  // select = output<number>();

  /*avatar = input.required<string>();
  name = input.required<string>();
  id = input.required<string>();
  types = input.required<string[]>();*/

  get pokemonType() {
    return this.monster.type?.[0] ?? '';
  }
  /*pokemonType = computed(() => { 
      return this.types?.[0] ?? ''; 
    })*/

  get typeStyle() {
    const colors = TYPES.find((t) => t.type === this.pokemonType.toLowerCase());
    return `background-color: ${colors?.bg}; color: ${colors?.text}; border: 1px solid ${colors?.border}`;
  }

  onSelectPokemon() {
    /*const randomIndex = Math.floor(Math.random() * POKEMON.length);
    this.pokemon.set(POKEMON[randomIndex]);*/

    this.select.emit(this.monster.id);
  }

  addToFavorite() {
    this.favorite.emit(this.monster.id);
    console.log('Emitting add to favorite');
  }
}
