import {
  Component,
  ElementRef,
  viewChild,
  AfterViewInit,
  OnInit,
  ViewChild,
  AfterContentInit,
  Output,
  EventEmitter,
  output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Button } from '../shared/button/button';
import { WishlistHelper } from './whishlist.service';
import { PokeGrid } from '../poke-grid/poke-grid';
import { Control } from '../shared/control/control';
import { type MyList } from './list.model';

@Component({
  selector: 'app-whishlist',
  imports: [FormsModule, Button, PokeGrid, Control],
  templateUrl: './whishlist.html',
  styleUrl: './whishlist.css',
  standalone: true,
})
export class Whishlist implements AfterViewInit, OnInit {
  // look for an element with the template reference variable `form` and assign it to this property
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  private formElement = viewChild.required<ElementRef<HTMLFormElement>>('form'); // ViewChild as a signal

  // @Output() addedToList = new EventEmitter<void>();
  addedToList = output<string>(); // using signal for diverticity

  constructor(private whishlistHelper: WishlistHelper) {}

  ngOnInit(): void {
    console.log('OnInit: ', this.form?.nativeElement);
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit: ', this.formElement().nativeElement);
  }

  createNewFavoriteList(whishListName: HTMLInputElement): void {
    // here we are passing the entire DOM element. if we wish to pass only the value
    // we can pass the argument and type it `string`. then in the template we use .value
    const name = whishListName.value;

    console.dir('⭐️ Creating a new favorite list: ', name);
    if (name.trim() !== '') {
      this.whishlistHelper.create(name);
    }

    //this.form?.nativeElement.reset();
    this.formElement().nativeElement.reset();

    // emit the name of the list that was added to the parent component
    this.addedToList.emit(name);
  }

  hasFavoriteLists(): boolean {
    return this.whishlistHelper.hasLists() === true;
  }
}
