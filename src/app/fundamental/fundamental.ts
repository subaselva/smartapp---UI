import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone:true,
  selector: 'app-fundamental',
  imports: [CommonModule,FormsModule],
  templateUrl: './fundamental.html',
  styleUrl: './fundamental.css'
})
export class Fundamental {
  username = 'Learn Smart Coding';
  action = 'Send Email';
  imageUrl = '../../assets/custom/Learn Smart Coding Logo white bg.png';
  isDisabled = true;
  showElement = true;
  fruits = ['Orange', 'Lemon', 'Apple', 'Banana'];
  handleClick() {
    alert('I was clicked');
  }

  

}
