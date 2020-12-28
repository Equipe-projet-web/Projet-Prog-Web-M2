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

  constructor(private panierService : PanierService) {
    this.apiUrl = environment.apiUrl;
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
    return price;
  }

  onSubmit(form: NgForm) {
    this.panierService.storeBooking(form.value);
  }
}
