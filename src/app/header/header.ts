import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  imports:[RouterModule,CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  showMenu = true;

toggleMenu(event: Event) {
  event.preventDefault(); // prevents page jump
  this.showMenu = !this.showMenu;
}


}

