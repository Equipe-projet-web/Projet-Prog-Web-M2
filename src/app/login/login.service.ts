import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()
export class LoginService {
  apiUrl:string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  fetchRaces() : any {
    return this.http.get(this.apiUrl + "/pub/races");
  }
}
