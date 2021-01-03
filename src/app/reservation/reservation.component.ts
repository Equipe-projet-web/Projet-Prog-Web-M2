import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ReservationService} from "./reservation.service";
import {environment} from "../../environments/environment";
import {NgForm} from "@angular/forms";
import {NotifierService} from "angular-notifier";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  private readonly notifier: NotifierService;
  booking;
  apiUrl: string;
  selectedReferenceQrCode:string;
  selectedOfferBooking;

  constructor(
    private route: ActivatedRoute,
    private reservationService : ReservationService,
    notifierService: NotifierService,
    ) {
    this.fetchBooking(this.route.snapshot.paramMap.get('reference'));
    this.apiUrl = environment.apiUrl;
    this.notifier = notifierService;
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

  updateSelectedOfferBooking(offerBooking) : void {
    this.selectedOfferBooking = offerBooking;
  }

  submitPeople(form: NgForm) {
    const formValues = form.value;

    this.reservationService.storeInvitation(this.selectedOfferBooking, form.value).subscribe({
      next: data => {
        this.booking['OfferBookings'].forEach(item => {
          if(item.id == this.selectedOfferBooking.id){
            const newItem = {
              firstName: formValues.firstName,
              lastName: formValues.lastName,
              email: formValues.email
            };

            if (item.BookingPeople == null){
              item.BookingPeople = [
                newItem
              ]
            } else {
              item.BookingPeople.push(newItem);
            }
          }
        })
        this.notifier.notify("success", "Invité ajouté. Il recevra un email avec son ticket !");
        form.reset();
        if (this.selectedOfferBooking.count <= this.selectedOfferBooking.BookingPeople.length){
          window.location.reload();
        }
      }
    });

  }

  removeUser(offerBooking, bookingPeople) {
    this.reservationService.deleteInvitation(bookingPeople).subscribe({
      next: data => {
        this.booking['OfferBookings'].forEach(item => {
          if(item.id == offerBooking.id){
            item.BookingPeople = item.BookingPeople.filter(el => { return el.id != bookingPeople.id; });
          }
        });
        this.notifier.notify("success", "Utilisateur supprimé");
      }
    })
  }

  deleteTicket(id) {
    this.reservationService.deleteTicket(id).subscribe(
      data => {
        this.booking['OfferBookings'] = this.booking['OfferBookings'].filter(el => { return el.id != id; });
      }
    )
  }


}
