import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PanierComponent } from './panier/panier.component';
import { RaceItemComponent } from './race-item/race-item.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ReservationsComponent } from './reservations/reservations.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'race/:id', component:RaceItemComponent, pathMatch: 'full'},//{path:'race/:id', component:RaceItemComponent}
  {path:'panier', component:PanierComponent},
  {path:'reservations', component:ReservationsComponent},
  {path:'reservation/:reference', component:ReservationComponent}//{path:'reservation/:id', component:ReservationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
