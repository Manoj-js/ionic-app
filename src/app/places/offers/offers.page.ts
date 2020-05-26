import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
offers: Place[];
  constructor(private placeService: PlacesService, private router: Router) { }

  ngOnInit() {

   this.offers =  this.placeService.places;
  }

  onEdit(offerId: string, slidingitem: IonItemSliding){
    this.router.navigate(['/', 'places', 'tabs', 'offers', 'edit', offerId])
    console.log(offerId)
    slidingitem.close();
  }

}
