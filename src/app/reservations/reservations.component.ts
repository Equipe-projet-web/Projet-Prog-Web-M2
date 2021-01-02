import { Component, OnInit } from '@angular/core';
import {ReservationsService} from "./reservations.service";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  bookingOffers;
  bookingOffersCount : number;
  apiUrl:string;
  ticketsCount : number;
  clientsCount : number;
  sellCount : number;

  constructor(
    private reservationsService : ReservationsService
  ) {
    this.fetchBookingOffers();
    this.apiUrl = environment.apiUrl;
    this.ticketsCount = 0;
    this.sellCount = 0;
  }

  ngOnInit(): void {
  }

  fetchBookingOffers() {
    this.reservationsService.fetchBookingOffers().subscribe(
        data => {
          this.bookingOffersCount = data.data.bookingOffers.length;
          this.bookingOffers = data.data.bookingOffers;
          data.data.bookingOffers.forEach(value => {
            this.ticketsCount += value.count;
            this.sellCount += value.count * value.Offer.price;
          })
        }
    );
  }

}
