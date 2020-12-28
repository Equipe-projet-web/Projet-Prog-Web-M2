import { Component, OnInit } from '@angular/core';
import {PanierService} from "../panier/panier.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private panierService: PanierService) { }

  ngOnInit(): void {
  }

  getNumberItemsInCart() : any {
    return this.panierService.getItems().length;
  }
}
