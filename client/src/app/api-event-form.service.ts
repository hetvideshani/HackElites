import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiEventFormService {
  apiUrl = "http://localhost:3030"

  constructor(private _http: HttpClient) {
  }

  register(event: any) {
    return this._http.post(this.apiUrl + "/createEvent", event);
  }

  getAllEvent() {
    return this._http.get(this.apiUrl + "/getAllEvent")
  }

}
