import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ReservationService} from "./reservation.service";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  booking;

  constructor(private route: ActivatedRoute, private reservationService : ReservationService) {
    this.fetchBooking(this.route.snapshot.paramMap.get('reference'));
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


}
