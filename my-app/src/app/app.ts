import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';

import { Pokedex } from './pokedex/pokedex';
import { Trainer } from './trainer/trainer';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Pokedex, Trainer, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('my-app');

  trainerInfo = {
    name: 'Ash Ketchum',
    hometown: 'Pallet Town',
    experienceLevel: 'Master Trainer',
    partnerPokemon: 'Pikachu',
    badges: 8,
    goal: 'Complete the Kanto Pokedex',
    specialties: ['Battle Strategy', 'Pokemon Bonding', 'Gym Challenges'],
  };
}
