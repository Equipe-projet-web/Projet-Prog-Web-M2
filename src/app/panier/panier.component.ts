import { Component, OnInit } from '@angular/core';
import {PanierService} from "./panier.service";
import {environment} from "../../environments/environment";
import {NgForm} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";
import {NotifierService} from "angular-notifier";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  private readonly notifier: NotifierService;
  apiUrl: string;
  isPaymentStep = false;
  randomRace;
  errorMessage = null;

  constructor(
    private panierService : PanierService,
    notifierService: NotifierService,
  ) {
    this.apiUrl = environment.apiUrl;
    this.notifier = notifierService;
    this.fetchRandomRace();
  }

  ngOnInit(): void {
  }

  getItems (){
    return this.panierService.getItems();
  }

  removeOffer(id){
    this.panierService.clearItemInCart(id);
  }

  totalPrice(){
    let price = 0;
    this.getItems().forEach(item => {
      price += item.number * item.offer.price;
    });
    return Math.round(price * 100) / 100;
  }

  tvaPrice() {
    return Math.round(this.totalPrice() * 0.2 * 100) / 100;
  }

  onSubmit(form: NgForm) {
    this.panierService.storeBooking(form.value).subscribe(
      data => {
        console.log('ok')
        this.panierService.storeOffers(this.panierService.getItems(), data['data'].booking);
      },
      error => {
        this.notifier.notify("error", "Erreur dans le stockage de votre commande. Certains champs semblent être manquants ou mal-formatés.");
      }
    )
  }

  fetchRandomRace() : any {
    this.panierService.fetchRandomRace().subscribe(
      data => {
        this.randomRace = data['data'].race
        console.log(this.randomRace)
      }
    )
  }

  getMinPrice(offers) : string {
    var minPrice = Infinity;
    offers.forEach(el => {
      if (el.price < minPrice) {
        minPrice = el.price;
      }
    });
    if (minPrice == Infinity) {
      return "-";
    } else {
      return minPrice.toString();
    }
  }
}
