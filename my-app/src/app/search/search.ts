import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { POKEMON } from '../pokemon-list';
import { type SearchPokemon } from './search.model';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  pokeminList = POKEMON;

  @Output() close = new EventEmitter<void>();
  @Output() search = new EventEmitter<SearchPokemon>();

  term = '';

  closeDialog() {
    this.close.emit();
  }

  onSearchSubmit() {
    this.search.emit({
      term: this.term,
    });
  }
}
