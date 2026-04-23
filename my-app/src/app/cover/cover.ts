import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cover',
  imports: [],
  templateUrl: './cover.html',
  styleUrl: './cover.css',
})
export class Cover implements OnInit {
  @Input({ required: true }) image!: string;
  @Input({ required: true }) alt!: string;

  // avoid adding complex initiation in constructor

  ngOnInit() {
    // use this in order to initiate something instead of using the constructor().
    // for example : sending the http request.

    // console.log('ngOnInit() ran ');
  }
}
