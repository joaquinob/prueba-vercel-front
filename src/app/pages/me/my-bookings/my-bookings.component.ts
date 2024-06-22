import { FormatDatePipe } from './../../../pipes/format-date.pipe';
import { Component } from '@angular/core';
import { Booking } from '../../../interfaces/booking';

@Component({
  selector: 'app-my-bookings',
  standalone: true,
  imports: [FormatDatePipe],
  templateUrl: './my-bookings.component.html',
  styleUrl: './my-bookings.component.css',
})
export class MyBookingsComponent {
  bookings: Booking[] = [];

  constructor(){
    
  }
}
