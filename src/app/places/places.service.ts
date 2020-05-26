import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private Places: Place[] = [
    new Place(
      'p1',
      'Oyo Nelakarai',
      'Best place in ecr',
      'https://images.oyoroomscdn.com/uploads/hotel_image/10386/56dc34361b136cac.jpg',
      1200
    ),
    new Place(
      'p2',
      'Oyo Mahabalipuram',
      'Best place in ecr',
      'https://images.oyoroomscdn.com/uploads/hotel_image/58341/e274a69f500ecb20.jpg',
      1500
    ),
    new Place(
      'p3',
      'Oyo OMR',
      'Best place in omr',
      'https://skift.com/wp-content/uploads/2019/11/oyo-rooms-.jpg',
      1300
    ),
  ];
  constructor() {}

  get places() {
    return [...this.Places];
  }

  getPlace(id: string) {
    return {...this.places.find(
      place => place.id === id)};
  }
}
