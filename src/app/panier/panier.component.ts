import { Component, OnInit } from '@angular/core';
import {PanierService} from "./panier.service";
import {environment} from "../../environments/environment";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  apiUrl: string;
  isPaymentStep = false;
  randomRace;

  constructor(private panierService : PanierService) {
    this.apiUrl = environment.apiUrl;
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
    this.panierService.storeBooking(form.value);
  }

  fetchRandomRace() : any {
    this.panierService.fetchRandomRace().subscribe(
      data => {
        console.log(data);
        this.randomRace = data['data'].race
      }
    )
  }
}
