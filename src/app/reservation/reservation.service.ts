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

}
