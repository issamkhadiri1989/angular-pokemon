import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pill',
  imports: [],
  templateUrl: './pill.html',
  styleUrl: './pill.css',
})
export class Pill {
  @Input() type?: string | null = null;

  get class() {
    return `type-`+this.type?.toLocaleLowerCase();
  }
}
