import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
standalone: true,
  imports: [
   RouterLink
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
