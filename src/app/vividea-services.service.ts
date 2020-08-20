import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class VivideaServicesService {
  configUrl = "http://localhost:5000/api/"
  constructor(private http: HttpClient) { }

  /* Login User */
  loginUser(data) {
    return this.http.post<any>(this.configUrl + "login", data).pipe(map(res => {
      return res;
    }));
  }
}
