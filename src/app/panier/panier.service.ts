import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  constructor() {
    if (JSON.parse(localStorage.getItem('cart')).length == 0){
      localStorage.setItem('cart', JSON.stringify([]));
      console.log('Set new local storage :', JSON.parse(localStorage.getItem('cart')))
    }
  }

  addToCart(offer, number) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.push({offer : offer, number : number});
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log("Add to cart : ", JSON.parse(localStorage.getItem('cart')))
  }

  getItems() {
    return JSON.parse(localStorage.getItem('cart'));
  }

  clearCart() {
    localStorage['cart'] = [];
    return [];
  }
}
