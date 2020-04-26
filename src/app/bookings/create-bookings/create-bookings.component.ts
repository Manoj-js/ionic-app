import { Component, OnInit, Input } from '@angular/core';
import { Place } from 'src/app/places/place.model';
import { NgModel } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-bookings',
  templateUrl: './create-bookings.component.html',
  styleUrls: ['./create-bookings.component.scss'],
})
export class CreateBookingsComponent implements OnInit {

  @Input() selectedPlace: Place;
  constructor(private modelCtrl: ModalController) { }

  ngOnInit() {}

  onCancel(){
  this.modelCtrl.dismiss(null, 'cancel');
  }

  onBookPlace(){
    this.modelCtrl.dismiss({
      message: 'this is messsage'
    }, 'confirm');

  }

}
