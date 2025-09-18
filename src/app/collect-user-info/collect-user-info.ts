import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Input, Output, EventEmitter } from '@angular/core';
import { DiningTable, ReserveTable } from '../models/restaurants.model';
@Component({
  selector: 'app-collect-user-info',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './collect-user-info.html',
  styleUrl: './collect-user-info.css'
})
export class CollectUserInfo {
   
  userForm!: FormGroup;

  @Input() selectedTable!: DiningTable;
  @Output() onUserBookinginfoComplete = new EventEmitter<ReserveTable>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      phoneNumber: ['9876542140', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      timeSlotId: [this.selectedTable?.timeSlotId, Validators.required],
      reservationDate: [this.selectedTable?.reservationDay, Validators.required],
      reservationStatus: ['Booked'] // default value
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const reserveTable: ReserveTable = this.userForm.value;
      this.onUserBookinginfoComplete.emit(reserveTable);
    } else {
      // show validation messages
      console.warn('Form is invalid');
    }
  }

}
