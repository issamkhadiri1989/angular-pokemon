import { Component, EventEmitter, input, Input, model, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface TrainerProfile {
  name: string;
  hometown: string;
  experienceLevel: string;
  partnerPokemon: string;
  badges: number;
  goal: string;
  specialties: string[];
}

@Component({
  selector: 'app-trainer',
  imports: [FormsModule],
  templateUrl: './trainer.html',
  styleUrl: './trainer.css',
})
export class Trainer {
  // two way binding example with input and output for 2 bindable properties
  @Input({ required: true }) profile!: TrainerProfile;
  // the property name is profile`Change` but the event name is profile-change
  @Output() profileChange = new EventEmitter<TrainerProfile>();

  // angluar + 17.2 + two way binding with input and output properties
  profileModel = model.required<TrainerProfile>();

  resetValues() {
    this.profileChange.emit({
      name: 'N/A',
      hometown: 'N/A',
      experienceLevel: 'N/A',
      partnerPokemon: 'N/A',
      badges: 0,
      goal: 'N/A',
      specialties: [],
    });

    this.profileModel.set({
      name: 'N/A',
      hometown: 'N/A',
      experienceLevel: 'N/A',
      partnerPokemon: 'N/A',
      badges: 0,
      goal: 'N/A',
      specialties: [],
    });
  }

  revertChanges() {
    this.resetValues();
    console.log('xx Trainer profile has been reset to default values. xx');
  }
}
