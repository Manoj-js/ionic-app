import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, ModalController, ActionSheetController } from '@ionic/angular';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';
import { CreateBookingsComponent } from 'src/app/bookings/create-bookings/create-bookings.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
place: Place;
  constructor(private placeService: PlacesService,
              private route: ActivatedRoute,
              private navCtrl: NavController,
              private modelCtrl: ModalController,
              private actionSheet: ActionSheetController) { }

  ngOnInit() {
    this.route.paramMap.subscribe((data)=> {
      if(!data.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/serach');
        return;
      }
      this.place = this.placeService.getPlace(data.get('placeId'))

    })
  }

  onBookPlace() {
    this.actionSheet.create({
      header: 'choose an action',
      buttons: [{
        text: 'Select Date',
        handler: () => {
          this.openBookingModel('select')

        }
      },
    {
      text: 'random date',
      handler: () => {
        this.openBookingModel('random');

      }
    },
  {
    text: 'cancel',
    role: 'destructive'
  }]
    }).then(actionEl => {
      actionEl.present();
    })
    // this.router.navigateByUrl('/places/tabs/search')
  }
openBookingModel(mode: 'select' | 'random') {
  console.log(mode)
  this.modelCtrl.create({
    component: CreateBookingsComponent,
    componentProps:{
      selectedPlace: this.place
    },
  }).then((model) => {
    model.present();
    return model.onDidDismiss();
  }).then(result =>{
    console.log(result.data, result.role);
    if (result.role === 'confirm') {
      console.log('booked!!');
    }
  });
}
  

}
