import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-evolution',
  imports: [],
  templateUrl: './evolution.html',
  styleUrl: './evolution.css',
})
export class Evolution {
  @Input({required: true}) name!: string;
  @Input({required: true}) num!: string;
  @Input({required: true}) avatar!: string;
}
