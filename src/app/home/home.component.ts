import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HomeService} from "./home.service";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent {
  races$;
  apiUrl: string;

  constructor(private homeService: HomeService, private http: HttpClient) {
    this.fetchRaces();
    this.apiUrl = environment.apiUrl;
  }

  fetchRaces() : void {
    this.homeService.fetchRaces().subscribe(
       data => {
         this.races$ = data['data'].races.rows;
       },
       error => console.error('Erreur :', error)
     );
  }

}
