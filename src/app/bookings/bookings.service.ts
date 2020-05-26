import { Injectable } from '@angular/core';
import { Booking } from './booking.model';

@Injectable({
    providedIn: 'root'
})

export class BookingsService {
private Bookings: Booking[] = [
    {
        id: 'asdqwe32',
        placeId: 'asdcasd34343',
        placeTitle: 'Oyo Nelankari',
        userId: 'asdas3244',
        guestNumber: 2,

    },
    {
        id: 'fvhgbdwe32',
        placeId: 'afdxgdfgasd34343',
        placeTitle: 'Oyo Omr',
        userId: 'hfgh3244',
        guestNumber: 2,

    }
]

get bookings() {
    return [...this.Bookings];
}
}
