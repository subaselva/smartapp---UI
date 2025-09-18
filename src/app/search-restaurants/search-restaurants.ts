
import { Component, OnInit, TemplateRef } from '@angular/core';
import {  DiningTable, ReserveTable, Restaurant, RestaurantBranch } from '../models/restaurants.model';
import { RestaurantService } from '../service/resturant.service';
import { CommonModule, DatePipe } from '@angular/common';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ReservationService } from '../service/reservation.service';
import { ToastrService } from 'ngx-toastr';
import { CollectUserInfo } from '../collect-user-info/collect-user-info';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-search-restaurants',
  imports: [CommonModule,
    FormsModule,
    CollectUserInfo ],
  providers: [DatePipe], 
  templateUrl: './search-restaurants.html',
  styleUrl: './search-restaurants.css'
})
export class SearchRestaurants implements OnInit {
  headingTitle = 'Search Restaurants';
  searchTerm: string = ''; 
  restaurants: Restaurant[] = [];
  filteredRestaurants: Restaurant[] = [];
  userEmailId='';

  selectRestaurant!: Restaurant | undefined;

  filteredBranches: RestaurantBranch[] = []; 
  restaurantBranches: RestaurantBranch[] = [];
  selectedBranch: RestaurantBranch | null = null;

  selectedBranchId: number = -1;
  selectedRestaurantId: number = -1; 
  distinctReservationDays: string[] = [];
  branchDiningTables: DiningTable[] = [];
  bookingTables: DiningTable[] = [];
  selectedTable!: DiningTable;
  reservationSuccess = false;
  modalRef?: BsModalRef;

  config = {
    backdrop: true,
    ignoreBackdropClick: false
  };

  constructor(
    private restaurantService: RestaurantService, 
    private datePipe: DatePipe,
    private modalService: BsModalService, 
    private reservationService: ReservationService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getRestaurants();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  getRestaurants() {
    this.restaurantService.GetRestaurants().subscribe(s => {
      this.restaurants = s;
      this.filteredRestaurants = s;
      this.selectRestaurant = s[0];
      this.selectedRestaurantId = this.selectRestaurant.id;
      this.getRestaurantBranches();
    });
  }

  getRestaurantBranches() {
    this.restaurantService.GetRestaurantBranches(this.selectedRestaurantId).subscribe(s => {
      this.restaurantBranches = s;
      this.filterBranches(this.selectedRestaurantId);
    });
  }

  onBranchSelected(id: number) {
    this.bookingTables = [];
    this.getDiningTables();
  }

  getDiningTables() {
    this.restaurantService.GetDiningTablesByBranch(this.selectedBranchId).subscribe(s => {
      this.branchDiningTables = s;
      this.getDistinctReservationDays();
    });
  }

  onUserBookinginfoComplete(table: ReserveTable) {
    this.modalRef?.hide();
    this.toastr.info('We have sent your request','Initiated')
    this.reservationService.CreateReservation(table).subscribe(data => {
      this.toastr.success('Your reservation has been confirmed!','Success')
      this.reservationSuccess = true;
      this.reset();
    })
  };

  reset() {
    this.selectedRestaurantId = -1;
    this.selectedBranchId = -1;
    this.bookingTables=[];
    this.distinctReservationDays=[];
    this.selectRestaurant = undefined;
  }

  bookTable(table: DiningTable): void {
    console.log('Selected Table:', table);
    this.selectedTable = table;
  }

  reservationDayClicked(day: string) {
    const parsedDate = new Date(day);

    this.bookingTables = this.branchDiningTables.filter((f) => {
      const reservationDate = new Date(f.reservationDay);
      return (
        reservationDate.getFullYear() === parsedDate.getFullYear() &&
        reservationDate.getMonth() === parsedDate.getMonth() &&
        reservationDate.getDate() === parsedDate.getDate()
      );
    });
  }

  formatDate(inputDate: string): string {
    const datePipe = new DatePipe('en-US');
    const parsedDate = new Date(inputDate);
    const formattedDate = datePipe.transform(parsedDate, 'MMMM d, y');

    const dayNumber = parsedDate.getDate();
    let daySuffix = '';
    if (dayNumber === 1 || dayNumber === 21 || dayNumber === 31) {
      daySuffix = 'st';
    } else if (dayNumber === 2 || dayNumber === 22) {
      daySuffix = 'nd';
    } else if (dayNumber === 3 || dayNumber === 23) {
      daySuffix = 'rd';
    }

    return formattedDate ? formattedDate + daySuffix : '';
  }

  getDistinctReservationDays(): void {
    const uniqueReservationDays: string[] = [];

    this.branchDiningTables.forEach((reservation) => {
      const formattedDate = this.datePipe.transform(reservation.reservationDay, 'MM-dd-yyyy');
      if (formattedDate && !uniqueReservationDays.includes(formattedDate)) {
        uniqueReservationDays.push(formattedDate);
      }
    });

    this.distinctReservationDays = uniqueReservationDays;
  }

  filterBranches(id: number): void {
    this.reservationSuccess = false;
    this.selectRestaurant = this.restaurants.find(f => f.id == id);
    this.filteredBranches = this.restaurantBranches.filter(
      (branch) => +branch.restaurantId === +id
    );
  }

  filterRestaurants(): void {
    if (this.searchTerm.trim() === '') {
      this.filteredRestaurants = this.restaurants;
    }

    const searchTermLower = this.searchTerm.toLowerCase();
    this.filteredRestaurants = this.restaurants.filter(
      (restaurant) =>
        restaurant.name.toLowerCase().includes(searchTermLower) ||
        restaurant.address.toLowerCase().includes(searchTermLower)
    );
  }

  checkInReservation(table: DiningTable){
    this.toastr.info('We have sent your check in request','Initiated')
    this.reservationService.UpdateReservation(table).subscribe(data => {
      this.toastr.success('You have checked in and now it is time enjoy your meal!','Success')
      this.reservationSuccess = true;
      this.reset();
    })
  }
}
