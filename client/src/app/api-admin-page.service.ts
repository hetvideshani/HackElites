import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiAdminPageService {
  apiUrl = "http://localhost:3030"

  constructor(private _http: HttpClient) {
  }

  getAllAdmin() {
    return this._http.get(this.apiUrl + "/getAllAdmin");
  }

  login(admin: any) {
    return this._http.post(this.apiUrl + "/adminLogin", admin);
  }
  // getOneAdmin() {
  //   return this._http.get(this.apiUrl + "/getOneAdmin");
  // }
}
