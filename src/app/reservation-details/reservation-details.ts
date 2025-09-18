import { Component } from '@angular/core';
import { ReservationService } from '../service/reservation.service';
import { ReservationDetailsModel } from '../models/restaurants.model';
import { DatePipe,CommonModule } from '@angular/common';
@Component({
  selector: 'app-reservation-details',
  imports: [CommonModule,DatePipe],
  templateUrl: './reservation-details.html',
  styleUrl: './reservation-details.css'
})
export class ReservationDetails {
  reservationDetails: ReservationDetailsModel[] = [];

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    // Fetch reservation details from your service
    this.reservationService.GetReservationDetails().subscribe(details => {
      this.reservationDetails = details;
    });
  }

}
