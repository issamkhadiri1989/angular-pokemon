import { MyList } from './../whishlist/list.model';
import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-list-item',
  imports: [],
  templateUrl: './list-item.html',
  styleUrls: ['./list-item.css'],
})
export class ListItem {
  data = input.required<MyList>();

  refrest = output(); // just for displaying the new list after deletion, it can be removed if we use a more reactive approach in the parent component

  visibility = signal(false); // this is optional and can be used to toggle the visibility of the item details

  onToggleVisibility() {
    console.log('Toggling visibility for', this.data().name);
    // this.visibility.set(!this.visibility());
    this.visibility.update((prev) => !prev); // unlike set, it accepts a function that receives the previous value and returns the new value, which is useful for toggling or when the new value depends on the old value.
  }

  onActivateSquad() {
    console.log('Activating squad :', this.data().name);
    this.refrest.emit(); // emit an event to notify the parent component to refresh the list, this is just for demonstration and can be removed if we use a more reactive approach in the parent component
  }
}
