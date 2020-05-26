import { Component, OnInit } from '@angular/core';
import { BookingsService } from './bookings.service';
import { Booking } from './booking.model';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
LoadedBookings: Booking[];
  constructor(private bookingsService: BookingsService) { }

  ngOnInit() {

    this.LoadedBookings = this.bookingsService.bookings;
  }

  cancelBooking(offerId: string, slidingBooking: IonItemSliding){
     
    slidingBooking.close();
  }


}
