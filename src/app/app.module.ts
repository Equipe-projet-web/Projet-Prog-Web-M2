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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }