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
  notifications;

  constructor(
    private reservationsService : ReservationsService
  ) {
    this.fetchBookingOffers();
    this.fetchNotifications();
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
          this.calcute(data.data.bookingOffers);
        }
    );
  }

  calcute(bookingOffers) {
    this.ticketsCount = 0;
    this.sellCount = 0;

    bookingOffers.forEach(value => {
      this.ticketsCount += value.count;
      this.sellCount += value.count * value.Offer.price;
    })
  }

  deleteBookingOffer(id) {
    this.reservationsService.deleteBookingOffers(id).subscribe(
      data => {

        this.bookingOffers = this.bookingOffers.filter(function(currentChar) {
          return currentChar.id !== id;
        });

        this.calcute(this.bookingOffers);
      }
    )
  }

  fetchNotifications() {
    this.reservationsService.fetchNotifications().subscribe(
      data => {
        this.notifications = data['data'].notifications;
      }
    )
  }

}
