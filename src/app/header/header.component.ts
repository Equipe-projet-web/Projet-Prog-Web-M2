import { Component, OnInit } from '@angular/core';
import {PanierService} from "../panier/panier.service";
import {NgForm} from "@angular/forms";
import {ReservationService} from "../reservation/reservation.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  bookingNotExist = false;

  constructor(private panierService: PanierService, private reservationService : ReservationService) { }

  ngOnInit(): void {
  }

  getNumberItemsInCart() : any {
    return this.panierService.getItems().length;
  }

  searchBooking(form: NgForm){
    this.reservationService.fetchBooking(form.value.bookingNumber).subscribe(
      data => {
          if(data['data'].booking == null){
            this.bookingNotExist = true;
          }
          else {
            window.location.href = "/reservation/" + form.value.bookingNumber;
          }
      }
    )
  }
}
