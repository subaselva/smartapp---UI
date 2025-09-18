import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';   // 👈 add this
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-contact',
  imports: [
    FormsModule,          // 👈 add this for [(ngModel)] and ngForm
    HttpClientModule 
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  constructor(private http: HttpClient) {}

  contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

sendMessage() {
  this.http.post(environment.apiUrl + '/contact/send', this.contact).subscribe({
    next: (res) => {
      alert("Your message has been sent to the restaurant!");
      this.contact = { name: '', email: '', subject: '', message: '' }; 
    },
    error: (err) => {
      console.error(err);
      alert("Failed to send message. Try again later.");
    }
  });
}



}

