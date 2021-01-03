import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()
export class FooterService {
  apiUrl:string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  fetchNotifications() {
    return this.http.get(this.apiUrl + "/api/admin/notifications");

  }

  storeNotification(values) : any {
    return this.http.post(this.apiUrl + "/pub/notifications/store", values);
  }
}
