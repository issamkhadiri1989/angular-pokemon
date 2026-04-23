import {
  AfterContentInit,
  afterNextRender,
  afterNextRender as afterRender,
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { PokeGrid } from '../../poke-grid/poke-grid';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class Control implements AfterContentInit, OnInit {
  ngOnInit(): void {
    console.log('🧠 Content ngOnInit(): ', this.control);
  }

  label = input.required<string>(); // using signal for diverticity

  // if you want to get the <ng-content> you cant use @ViewChild because it is not part of the component template. instead you can use @ContentChild to get the reference to the projected content.
  @ContentChild('input') private control!: ElementRef<HTMLInputElement | HTMLTextAreaElement>;

  private controlSignal = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input'); // using signal for diverticity

  private el = inject(ElementRef);

  // @HostBinding('class') className = 'control';
  /* @HostListener('click') onClick() {
    console.log("Clicked in the Host Element")
  } */

  ngAfterContentInit(): void {
    // this is the lifecycle hook that is called after the content has been projected into the component. it is called after the ngAfterViewInit lifecycle hook.
    // if @ContentChild is used to get the reference to the projected content, it will be available in the ngAfterContentInit lifecycle hook. if you try to access it in the ngOnInit lifecycle hook, it will be undefined because the content has not been projected yet.
    console.log('🧠 Content ngAfterContentInit(): ', this.control);
  }

  onClick() {
    console.log('Angular');
    console.log(this.el);
    console.log(this.control);
    console.log(this.controlSignal());
  }

  constructor() {
    afterNextRender(() => {
      console.log('🧠 Content afterNextRender(): ', this.control);
    });

    afterRender(() => {
      console.log('🧠 Content afterRender(): ', this.control);
    });

    console.log('🧠 Content constructor(): ', this.control);
  }
}
