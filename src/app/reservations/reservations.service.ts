import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ReservationsService {
  apiUrl:string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  fetchBookingOffers() : any {
    return this.http.get(this.apiUrl + '/api/admin/bookings/offers');
  }

  deleteBookingOffers(id) : any {
    return this.http.delete(this.apiUrl + '/api/admin/bookings/offers/' + id + '/delete');
  }


}
