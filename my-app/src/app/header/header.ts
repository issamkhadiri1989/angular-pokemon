import { Component } from '@angular/core'

@Component({
    selector: 'app-header',
    standalone: true, // this is optional starting from Angular 19
    templateUrl: './header.html',
    styleUrls: ['./header.css'] // use styleUrl to use only one file
})
export class Header {}