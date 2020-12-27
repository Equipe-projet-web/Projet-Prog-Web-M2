import {Router, ActivatedRoute, Params} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {RaceItemService} from "./race-item.service";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-race-item',
  templateUrl: './race-item.component.html',
  styleUrls: ['./race-item.component.css']
})
export class RaceItemComponent implements OnInit {
  id:string;
  race;
  apiUrl;

  constructor(private route: ActivatedRoute, private raceItemService: RaceItemService) {
    this.fetchRace(this.route.snapshot.paramMap.get('id'));
    this.apiUrl = environment.apiUrl;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  fetchRace(id) : void {
    this.raceItemService.fetchRace(id).subscribe(
      data => {
        this.race = data['data'].race;
      },
      error => console.error('Erreur :', error)
    );
  }

}
