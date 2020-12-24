import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PanierComponent } from './panier/panier.component';
import { RaceItemComponent } from './race-item/race-item.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'race', component:RaceItemComponent},
  {path:'panier', component:PanierComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
