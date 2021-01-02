import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  apiUrl:string;

  constructor(private http: HttpClient, private router: Router) {
    this.apiUrl = environment.apiUrl;
  }

  fetchBooking(reference) : any {
    return this.http.get(this.apiUrl + '/pub/bookings/' + reference);
  }

  storeInvitation(offerBooking, values) {
    return this.http.post(this.apiUrl + '/pub/bookings/'+ offerBooking.bookingId +'/offerbookings/' + offerBooking.id + '/invitation', values);
  }

  deleteInvitation(bookingPeople) {
    return this.http.delete(this.apiUrl + '/pub/bookingpeople/'+ bookingPeople.id +'/delete');
  }
}
