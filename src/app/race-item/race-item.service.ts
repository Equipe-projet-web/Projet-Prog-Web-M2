import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()
export class RaceItemService {
  apiUrl:string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  fetchRace(id:number) : any {
    return this.http.get(this.apiUrl + "/pub/races/" + id);
  }
}
