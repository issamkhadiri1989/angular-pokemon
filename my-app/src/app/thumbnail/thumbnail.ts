import { Component, input, ViewEncapsulation } from '@angular/core';
import { type Pokemon } from '../pokemon/pokemon.model';

@Component({
  selector: 'app-thumbnail',
  imports: [],
  templateUrl: './thumbnail.html',
  styleUrl: './thumbnail.css',
  host: {
    class: 'control',
  },
})
export class Thumbnail {
  item = input<Pokemon>();
}
