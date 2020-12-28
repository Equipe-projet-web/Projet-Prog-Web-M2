import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RaceItemComponent } from './race-item/race-item.component';
import { RacesContainerComponent } from './races-container/races-container.component';
import { HomeComponent } from './home/home.component';
import { PanierComponent } from './panier/panier.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { ReservationComponent } from './reservation/reservation.component';

import { HttpClientModule } from '@angular/common/http';
import { HomeService} from "./home/home.service";
import { RaceItemService } from "./race-item/race-item.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NotifierModule } from "angular-notifier";
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RaceItemComponent,
    RacesContainerComponent,
    HomeComponent,
    PanierComponent,
    ReservationsComponent,
    ReservationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NotifierModule,
    BrowserAnimationsModule
  ],
  providers: [
    HomeService,
    RaceItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
