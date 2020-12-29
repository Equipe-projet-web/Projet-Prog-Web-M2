import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ReservationService} from "./reservation.service";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  booking;
  apiUrl: string;
  selectedReferenceQrCode:string;

  constructor(private route: ActivatedRoute, private reservationService : ReservationService) {
    this.fetchBooking(this.route.snapshot.paramMap.get('reference'));
    this.apiUrl = environment.apiUrl;

  }

  ngOnInit(): void {
  }

  fetchBooking(reference) : void {
    this.reservationService.fetchBooking(reference).subscribe(
      data => {
        console.log(data)
        this.booking = data['data'].booking;
      },
      error => console.error('Erreur :', error)
    );
  }

  updateQRCode(value) : void {
    this.selectedReferenceQrCode = value;
  }


}
